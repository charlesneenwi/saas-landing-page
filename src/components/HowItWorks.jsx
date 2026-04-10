function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-950 py-10 px-6">
        <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
<h2 className="text-2xl pb-4 text-white mb-4">Three steps to your perfect video</h2>
<p className="text-gray-400 text-lg mb-12">Scenixa makes it easy to create stunning videos in just a few simple steps.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        1
                    </div>
                    <h3 className="text-xl mb-2 text-white">Enter your prompt</h3>
                    <p className="text-gray-500">Describe the animation you want to create.</p>
                </div>
                <div className="text-center">
                    <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        2
                    </div>
                    <h3 className="text-xl mb-2 text-white">AI Generates your video</h3>
                    <p className="text-gray-500">Our AI will automatically generate the animation based on your prompt.</p>
                </div>
                <div className="text-center">
                    <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        3
                    </div>
                    <h3 className="text-xl mb-2 text-white">Download and share</h3>
                    <p className="text-gray-500">Once generated, download your video and share it with anyone.</p>
                </div>
            </div>

        </div>

    </section>
  );
}

export default HowItWorks;