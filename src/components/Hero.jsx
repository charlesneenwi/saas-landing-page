import { motion } from "framer-motion";
function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center bg-gray-950 text-white pt-24">
            {/* Glow effect */}
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                <div 
                
                className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm px-4 py-1 rounded-full mb-6 mt-6">
                    ✨ AI Video Generation is here
                </div>
                <motion.div initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}>
                <h1 className="text-3xl md:text-7xl mb-6">
                    Turn any idea into a{" "} 
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">stunning video
                      </span> in minutes
                </h1>
                <p className="text-base md:text-lg mb-2 mt-4 text-gray-400">
                    Create explainer videos, whiteboard animations, and presentation videos — just from a prompt.
                </p>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg">
                        Get Started
                    </button>
                    <button className="px-8 py-2 border border-white/40 hover:bg-white/10 text-white rounded-lg transition duration-300">
  
                        Learn More
                    </button>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
  >
                    <p className="text-sm text-gray-400 mt-4">      
                        ✨ Trusted by 12,000+ creators • No credit card required • Cancel anytime
                    </p>
                    {/* Hero Visual */}
<motion.div 
initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
className="mt-16 rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/10">
  
  {/* Browser toolbar */}
  <motion.div 
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
  className="bg-gray-800 px-4 py-3 flex items-center gap-2">
    <div className="w-3 h-3 rounded-full bg-red-500"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div className="w-3 h-3 rounded-full bg-green-500"></div>
    <div className="flex-1 bg-gray-700 rounded-full mx-4 py-1 px-4 text-xs text-gray-400">
      app.scenixa.com
    </div>
  </motion.div>

  {/* dashboard */}
  <motion.div 
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
  className="bg-gray-900 p-6 grid grid-cols-3 gap-4">
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
  </motion.div>

</motion.div>
                </motion.div>
                {/* Trust Bar */}
<div className="relative mt-12 w-full overflow-hidden">
  {/* Left fade */}
  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
  {/* Right fade */}
  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest text-center mb-6">
  ✦ Trusted by teams at world-class companies ✦
</p>
  
  
</div>
            </div>

            <div className="flex animate-marquee gap-16 whitespace-nowrap">
    {[
  { name: 'Google', color: 'text-blue-400' },
  { name: 'Microsoft', color: 'text-green-400' },
  { name: 'Notion', color: 'text-white' },
  { name: 'Stripe', color: 'text-purple-400' },
  { name: 'Figma', color: 'text-pink-400' },
  { name: 'Netflix', color: 'text-red-400' },
  { name: 'Shopify', color: 'text-emerald-400' },
  { name: 'Airbnb', color: 'text-rose-400' },
  { name: 'Google', color: 'text-blue-400' },
  { name: 'Microsoft', color: 'text-green-400' },
  { name: 'Notion', color: 'text-white' },
  { name: 'Stripe', color: 'text-purple-400' },
  { name: 'Figma', color: 'text-pink-400' },
  { name: 'Netflix', color: 'text-red-400' },
  { name: 'Shopify', color: 'text-emerald-400' },
  { name: 'Airbnb', color: 'text-rose-400' },
].map((brand, index) => (
  <span key={index} className={`${brand.color} font-bold text-lg tracking-widest uppercase px-6 py-2 border border-gray-800 rounded-lg bg-gray-900/50 hover:border-gray-600 transition duration-300`}>
    {brand.name}
  </span>
))}
  </div>
        </section>
    )
}

export default Hero