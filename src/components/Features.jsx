import { motion } from "framer-motion";
import { Video, Pen, Download, Palette, Globe, BarChart } from "lucide-react";

function Features() {
  return (
    <section id="features" className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-6xl text-center mb-8">
  Everything you need in{" "}
  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
    one place
  </span>
</h2>
          <p className="text-lg text-center text-gray-300">
            Scenixa gives you all the tools to go from idea to finished video in
            minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg bg-gray-900 border border-gray-800 p-6 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2"
          >
            {<Video className="text-blue-400 mb-4" size={32} />}
            <h3 className="text-white font-semibold text-lg mb-2">
              Whiteboard Animations
            </h3>
            <p className="text-gray-400 text-sm">
              Turn any script into a professional whiteboard animation
              automatically.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2"
          >
            {<Pen className="text-blue-400 mb-4" size={32} />}
            <h3 className="text-white font-semibold text-lg mb-2">
              Script Writing
            </h3>
            <p className="text-gray-400 text-sm">
              Create engaging scripts for your videos with our intuitive editor.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2"
          >
            {<Download className="text-blue-400 mb-4" size={32} />}
            <h3 className="text-white font-semibold text-lg mb-2">
              Video Download
            </h3>
            <p className="text-gray-400 text-sm">
              Download your finished videos in high quality for offline viewing.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2"
          >
            {<Palette className="text-blue-400 mb-4" size={32} />}
            <h3 className="text-white font-semibold text-lg mb-2">
              Color Palette
            </h3>
            <p className="text-gray-400 text-sm">
              Create stunning color palettes for your videos with our intuitive
              editor.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2"
          >
            {<Globe className="text-blue-400 mb-4" size={32} />}
            <h3 className="text-white font-semibold text-lg mb-2">
              Global Reach
            </h3>
            <p className="text-gray-400 text-sm">
              Expand your audience worldwide with our localization tools.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300 hover:-translate-y-2"
          >
            {<BarChart className="text-blue-400 mb-4" size={32} />}
            <h3 className="text-white font-semibold text-lg mb-2">Analytics</h3>
            <p className="text-gray-400 text-sm">
              Gain insights into your video performance with our comprehensive
              analytics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;
