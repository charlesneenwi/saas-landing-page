import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div>
          <h3 className="text-white font-bold text-xl">
            Sceni<span className="text-blue-500">Xa</span>
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Turn any idea into a stunning video.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 mx-2"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 mx-2 whitespace-nowrap"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 mx-2"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 mx-2"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 mx-2"
          >
            Products
          </a>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/charlesneenwi" target="_blank">
            <FaGithub
              size={20}
              className="text-gray-400 hover:text-white transition duration-300"
            />
          </a>
          <a href="https://x.com/Charles_nk" target="_blank">
            <FaTwitter
              size={20}
              className="text-gray-400 hover:text-white transition duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/in/charles-neenwi-b908b6361" target="_blank">
            <FaLinkedin
              size={20}
              className="text-gray-400 hover:text-white transition duration-300"
            />
          </a>
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SceniXa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
