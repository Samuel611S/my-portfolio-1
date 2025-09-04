export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          {/* Animated Spinner */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
            
            <h2 className="text-2xl font-bold mb-2 gradient-text">
              Loading...
            </h2>
            <p className="text-gray-400">
              Please wait while we prepare everything for you
            </p>
          </div>

          {/* Skeleton Loader */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-800 rounded animate-pulse w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-800 rounded animate-pulse w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
