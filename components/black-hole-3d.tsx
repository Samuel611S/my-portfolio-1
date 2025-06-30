// src/components/BlackHoleScene.tsx
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

const JET_PARTICLE_COUNT = 200

function AccretionDisk() {
  const particlesRef = useRef<THREE.Points>(null)

  const { positions, colors, sizes } = useMemo(() => {
    const count = 800
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 2.5 + Math.random() * 3
      const height = (Math.random() - 0.5) * 0.4
      const colorFactor = Math.random()

      positions.set([
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius,
      ], i * 3)

      // Temperature-based colors: hot white/blue in center, orange/red at edges
      colors.set([
        1.0,
        0.3 + 0.7 * colorFactor,
        0.1 + 0.4 * colorFactor,
      ], i * 3)

      sizes[i] = 0.02 + Math.random() * 0.04
    }

    return { positions, colors, sizes }
  }, [])

  useFrame(() => {
    if (!particlesRef.current) return
    const pos = particlesRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < 800; i++) {
      const x = pos[i * 3]
      const z = pos[i * 3 + 2]
      const radius = Math.sqrt(x * x + z * z)
      const angle = Math.atan2(z, x) + 0.003 / radius

      pos[i * 3] = Math.cos(angle) * radius * 0.9993
      pos[i * 3 + 2] = Math.sin(angle) * radius * 0.9993

      if (radius < 2.0) {
        const newAngle = Math.random() * Math.PI * 2
        const newRadius = 4 + Math.random() * 2
        pos[i * 3] = Math.cos(newAngle) * newRadius
        pos[i * 3 + 2] = Math.sin(newAngle) * newRadius
      }
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} count={800} args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" array={colors} itemSize={3} count={800} args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" array={sizes} itemSize={1} count={800} args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

function RelativisticJets() {
  const topRef = useRef<THREE.Points>(null)
  const bottomRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const height = (Math.random() - 0.5) * 12
      const radius = Math.random() * 0.4
      const angle = Math.random() * Math.PI * 2
      
      positions.set([
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ], i * 3)
      
      // Beautiful blue-to-white gradient for realistic jet colors
      const intensity = Math.random()
      colors.set([
        0.4 + intensity * 0.6,  // Blue to white
        0.6 + intensity * 0.4,  // Cyan to white
        0.8 + intensity * 0.2   // Light blue to white
      ], i * 3)
    }

    return { positions, colors }
  }, [])

  useFrame(() => {
    [topRef, bottomRef].forEach((ref, dir) => {
      if (!ref.current) return
      const pos = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < 300; i++) {
        // Faster, more realistic jet movement
        pos[i * 3 + 1] += dir === 0 ? 0.08 : -0.08
        
        // Reset particles when they go too far
        if (pos[i * 3 + 1] > 10 || pos[i * 3 + 1] < -10) {
          pos[i * 3 + 1] = 0
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    })
  })

  return (
    <>
      <points ref={topRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={particles.positions} itemSize={3} count={300} args={[particles.positions, 3]} />
          <bufferAttribute attach="attributes-color" array={particles.colors} itemSize={3} count={300} args={[particles.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial 
          size={0.06} 
          vertexColors 
          transparent 
          opacity={0.7} 
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
      <points ref={bottomRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={particles.positions.slice()} itemSize={3} count={300} args={[particles.positions.slice(), 3]} />
          <bufferAttribute attach="attributes-color" array={particles.colors.slice()} itemSize={3} count={300} args={[particles.colors.slice(), 3]} />
        </bufferGeometry>
        <pointsMaterial 
          size={0.06} 
          vertexColors 
          transparent 
          opacity={0.7} 
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </>
  )
}

function EventHorizon() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime()
      ref.current.scale.setScalar(1 + Math.sin(t * 0.3) * 0.04)
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshBasicMaterial color="black" transparent opacity={0.97} />
    </mesh>
  )
}

function GravitationalLensing() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime()
      ref.current.rotation.z = t * 0.05
    }
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.7, 2.0, 64]} />
      <meshBasicMaterial
        color="#00ffff"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function ProceduralNebula() {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = 80 + Math.random() * 150
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions.set([x, y, z], i * 3)

      colors.set([
        0.3 + Math.random() * 0.7,
        0.2 + Math.random() * 0.5,
        0.5 + Math.random() * 0.5
      ], i * 3)
    }

    return { positions, colors }
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} count={1000} args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" array={colors} itemSize={3} count={1000} args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={2.5}
        vertexColors
        transparent
        opacity={0.12}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

function DynamicCamera() {
  const { camera } = useThree()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.08
    const r = 11
    camera.position.set(Math.cos(t) * r, 6 + Math.sin(t * 0.3) * 2, Math.sin(t) * r)
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function BlackHoleScene() {
  return (
    <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [10, 6, 0], fov: 50 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#ffffff" />
        <Stars radius={200} depth={60} count={2500} factor={4} fade speed={0.5} />

        <ProceduralNebula />
        <GravitationalLensing />
        <AccretionDisk />
        <EventHorizon />
        <RelativisticJets />
        <DynamicCamera />

        <OrbitControls enableZoom enableRotate enablePan={false} autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  )
}