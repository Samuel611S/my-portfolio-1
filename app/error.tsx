"use client"

import { useEffect } from "react"

export default function GlobalError({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }
  reset: () => void 
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-emerald-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" 
                    />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-400 mb-6">
                  We encountered an unexpected error. Don't worry, it's not your fault.
                </p>
                {error.message && (
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-300 font-mono">
                      {error.message}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  Try Again
                </button>
                <a
                  href="/"
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors font-medium"
                >
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
