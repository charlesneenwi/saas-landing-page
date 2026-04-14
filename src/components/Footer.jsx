import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 border-t border-white/10">
      
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left — Logo + tagline */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">
            Sceni<span className="text-blue-500">Xa</span>
          </h3>
          <p className="text-gray-400 text-sm">
            Turn any idea into a stunning video in minutes with the power of AI.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/charlesneenwi" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="text-gray-400 hover:text-white transition duration-300" />
            </a>
            <a href="https://x.com/Charles_nk" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} className="text-gray-400 hover:text-white transition duration-300" />
            </a>
            <a href="www.linkedin.com/in/charles-neenwi-b908b6361" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="text-gray-400 hover:text-white transition duration-300" />
            </a>
          </div>
        </div>

        {/* Middle — Product links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white transition duration-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition duration-300">Pricing</a></li>
            <li><a href="#how-it-works" className="hover:text-white transition duration-300">How It Works</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
          </ul>
        </div>

        {/* Right — Company links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom — Copyright */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} SceniXa. All rights reserved. Built  by{" "}
          <a href="https://my-portfolio-beige-three-30.vercel.app/" className="text-blue-400 hover:text-blue-300 transition duration-300">
            Charles Neenwi
          </a>
        </p>
      </div>

    </footer>
  )
}

export default Footer