import { motion } from "framer-motion";
function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-5xl text-white mb-4">
  Three steps to your{" "}
  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
    perfect video
  </span>
</h2>
          <p className="text-gray-400 text-lg mb-12">
            Scenixa makes it easy to create stunning videos in just a few simple
            steps.
          </p>
        </motion.div>
        <motion.div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block absolute top-8 left-1/5 right-1/5 h-px bg-gradient-to-r from-blue-500/50 to-cyan-400/50"></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
  <span className="text-white text-xl font-bold">1</span>
</div>
            <h3 className="text-xl mb-2 text-white">Enter your prompt</h3>
            <p className="text-gray-500">
              Describe the animation you want to create.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
  <span className="text-white text-xl font-bold">2</span>
</div>
            <h3 className="text-xl mb-2 text-white">AI Generates your video</h3>
            <p className="text-gray-500">
              Our AI will automatically generate the animation based on your
              prompt.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
  <span className="text-white text-xl font-bold">3</span>
</div>
            <h3 className="text-xl mb-2 text-white">Download and share</h3>
            <p className="text-gray-500">
              Once generated, download your video and share it with anyone.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
