export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          {/* Header */}
          <div className="mb-8">
            <div className="h-8 bg-gray-800 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
                {/* Project Image */}
                <div className="h-48 bg-gray-800"></div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="h-6 bg-gray-700 rounded w-16"></div>
                    <div className="h-6 bg-gray-700 rounded w-20"></div>
                    <div className="h-6 bg-gray-700 rounded w-14"></div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex gap-2">
                    <div className="h-10 bg-gray-700 rounded w-24"></div>
                    <div className="h-10 bg-gray-700 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
