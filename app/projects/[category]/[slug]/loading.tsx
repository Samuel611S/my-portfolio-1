export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          {/* Back Button */}
          <div className="mb-8">
            <div className="h-10 bg-gray-800 rounded w-32"></div>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div>
                <div className="h-12 bg-gray-800 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-6 bg-gray-700 rounded w-5/6 mb-6"></div>
                
                {/* Meta Info */}
                <div className="flex gap-6 mb-6">
                  <div className="h-5 bg-gray-700 rounded w-16"></div>
                  <div className="h-5 bg-gray-700 rounded w-20"></div>
                  <div className="h-5 bg-gray-700 rounded w-24"></div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <div className="h-10 bg-gray-800 rounded w-32"></div>
                  <div className="h-10 bg-gray-800 rounded w-28"></div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div>
                <div className="h-80 bg-gray-800 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Problem Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-8 bg-gray-700 rounded w-24 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-8 bg-gray-700 rounded w-28 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>

              {/* Outcome Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-8 bg-gray-700 rounded w-24 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-4/5"></div>
                </div>
              </div>

              {/* Key Features Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-8 bg-gray-700 rounded w-32 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-24"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-8 bg-gray-700 rounded w-28 mb-4"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-6 bg-gray-700 rounded w-32 mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 bg-gray-700 rounded w-16"></div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-6 bg-gray-700 rounded w-24 mb-4"></div>
                <div className="space-y-4">
                  <div>
                    <div className="h-4 bg-gray-700 rounded w-16 mb-2"></div>
                    <div className="flex flex-wrap gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-5 bg-gray-700 rounded w-12"></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-700 rounded w-16 mb-2"></div>
                    <div className="flex flex-wrap gap-1">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="h-5 bg-gray-700 rounded w-14"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info Card */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <div className="h-6 bg-gray-700 rounded w-24 mb-4"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i}>
                      <div className="h-3 bg-gray-700 rounded w-16 mb-1"></div>
                      <div className="h-4 bg-gray-700 rounded w-20"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
