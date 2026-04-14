import { motion } from 'framer-motion'

function CTA() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 px-6 text-center">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
          ✦ Get Started Today ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to create your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            first video?
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Join thousands of creators already using Scenixa to produce stunning videos in minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition duration-300">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white py-3 px-8 rounded-lg transition duration-300">
            Watch Demo
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          ✨ No credit card required • Cancel anytime • Free plan available
        </p>
      </motion.div>
    </section>
  )
}

export default CTA