function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-950 text-white pt-24">
            
            <div className="max-w-3xl mx-auto text-center px-6">
                <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm px-4 py-1 rounded-full mb-6 mt-6">
                    ✨ AI Video Generation is here
                </div>
                
                <h1 className="text-4xl md:text-6xl mb-6">
                    Turn any idea into a stunning video in minutes
                </h1>
                <p className="text-base md:text-lg mb-2 mt-4 text-gray-400">
                    Create explainer videos, whiteboard animations, and presentation videos — just from a prompt.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white ml-4 py-2 px-8 rounded-lg">
                        Get Started
                    </button>
                    <button className="ml-4 px-8 py-2 border border-white/40 hover:bg-white/10 text-white rounded-lg transition duration-300">
  
                        Learn More
                    </button>
                </div>
                <div>
                    <p className="text-sm text-gray-400 mt-4">      
                        ✨ Trusted by 12,000+ creators • No credit card required • Cancel anytime
                    </p>
                    {/* Hero Visual */}
<div className="mt-16 rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/10">
  
  {/* Browser toolbar */}
  <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
    <div className="w-3 h-3 rounded-full bg-red-500"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div className="w-3 h-3 rounded-full bg-green-500"></div>
    <div className="flex-1 bg-gray-700 rounded-full mx-4 py-1 px-4 text-xs text-gray-400">
      app.scenixa.com
    </div>
  </div>

  {/* Fake dashboard */}
  <div className="bg-gray-900 p-6 grid grid-cols-3 gap-4">
    <div className="col-span-1 bg-gray-800 rounded-lg p-4 space-y-3">
      <div className="h-3 bg-gray-700 rounded-full w-3/4"></div>
      <div className="h-3 bg-gray-700 rounded-full w-1/2"></div>
      <div className="h-3 bg-gray-700 rounded-full w-2/3"></div>
      <div className="h-3 bg-blue-500/30 rounded-full w-full"></div>
      <div className="h-3 bg-gray-700 rounded-full w-1/2"></div>
    </div>
    <div className="col-span-2 bg-gray-800 rounded-lg p-4 flex items-center justify-center">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-400 border-b-8 border-b-transparent ml-1"></div>
        </div>
        <p className="text-gray-400 text-sm">Generating your video...</p>
        <div className="h-2 bg-gray-700 rounded-full w-full mx-auto overflow-hidden">
          <div className="h-2 bg-blue-500 rounded-full w-2/3"></div>
        </div>
      </div>
    </div>
  </div>

</div>
                </div>
            </div>
        </section>
    )
}

export default Hero