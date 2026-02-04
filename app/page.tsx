export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              DrMaya
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="relative px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Now Available
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Welcome to Your
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Next Great Idea
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Build modern web applications with the latest technologies. Fast, scalable, and beautiful by default.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30">
                Start Building
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700">
                View Demo
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24 bg-white dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Everything You Need
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Powerful features to help you build faster
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimized performance with modern build tools and best practices built in.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Secure by Default
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Industry-standard security practices to keep your application and data safe.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Fully Responsive
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Beautiful on every device with mobile-first responsive design principles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              Join thousands of developers building amazing applications
            </p>
            <button className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30">
              Get Started for Free
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
