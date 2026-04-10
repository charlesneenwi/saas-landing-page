function CTA() {
    return (
        <section className="bg-blue-600/10 border-t border-b border-blue-500/20 py-24 text-center px-6">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6h6v-2h-4z"/>
                    </svg>
                </div>
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
  Ready to create your first video?
</h2>
                <p className="text-gray-500">Join thousands of satisfied users and create stunning videos in minutes.</p>
                
                </div>
                <div>
                    <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/30 transition duration-300">
  Get Started Free
</button>
<button className="mt-6 ml-4 px-8 py-3 border border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition duration-300">
  Watch Demo
</button>
                </div>
            </div>
        </section>
    )
}

export default CTA