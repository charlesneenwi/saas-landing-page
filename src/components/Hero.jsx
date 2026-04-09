function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-950 text-white pt-24">
            
            <div className="max-w-3xl mx-auto text-center px-6">
                <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm px-4 py-1 rounded-full mb-6">
                    ✨ AI Video Generation is here
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Turn any idea into a stunning video in minutes
                </h1>
                <p className="text-base md:text-lg mb-2 mt-4 text-gray-400">
                    Create explainer videos, whiteboard animations, and presentation videos — just from a prompt.
                </p>
                <div className="mt-8 space-x-6">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
                        Get Started
                    </button>
                    <button className="bg-transparent hover:bg-gray-600 text-white font-bold py-2 px-6 border rounded-lg border-white">
                        Learn More
                    </button>
                </div>
                <div>
                    <p className="text-sm text-gray-400 mt-4">      
                        ✨ Trusted by 12,000+ creators • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero