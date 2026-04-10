function Testimonials() {
    return (
        <section className="bg-gray-950 py-10 px-6">
            <div className="max-w-7xl mx-auto py-24 px-6 text-center">
                <div>
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
                    <h2 className="text-3xl text-white mb-4">What our users are saying</h2>
                    <p className="text-lg text-center text-gray-500 mb-12">Hear from some of our satisfied customers who have transformed their video creation process with Scenixa.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="rounded-lg bg-gray-900 border border-gray-800 p-6 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2">
                        <p className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</p>
                        <p className="text-gray-400 italic mb-4">"Scenixa has completely changed how we create videos. It's so easy to use and the results are amazing!"</p>
                        <div className="flex items-center gap-3 mt-4">
  <img src="https://i.pravatar.cc/48?img=1" className="rounded-full w-10 h-10" />
  <div className="text-left">
    <p className="text-white">Charles Neenwi</p>
    <p className="text-gray-500 text-sm">Marketing Director</p>
  </div>
</div>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2">
                        <p className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</p>
                        <p className="text-gray-400 italic mb-4">"I've tried many video creation tools, but Scenixa is by far the best. The AI-generated videos are incredibly realistic."</p>
                        <div className="flex items-center gap-3 mt-4">
  <img src="https://i.pravatar.cc/48?img=2" className="rounded-full w-10 h-10" />
  <div className="text-left">
    <p className="text-white">Wilbur Brookstone</p>
    <p className="text-gray-500 text-sm">Content Creator</p>
  </div>
</div>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2">
                        <p className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</p>
                        <p className="text-gray-400 italic mb-4">"The time I save using Scenixa is incredible. What used to take hours now takes minutes."</p>
                        <div className="flex items-center gap-3 mt-4">
  <img src="https://i.pravatar.cc/48?img=3" className="rounded-full w-10 h-10" />
  <div className="text-left">
    <p className="text-white">Emily Johnson</p>
    <p className="text-gray-500 text-sm">Social Media Manager</p>
  </div>
</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials