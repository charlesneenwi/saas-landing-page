import { useState } from "react"
import {Menu, X} from 'lucide-react'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    

    return (
        <nav className="w-full fixed top-0 left-0 z-50 p-6 bg-gray-900 border-b border-white/10">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="text-white text-2xl font-bold">Saa<span className="text-blue-500">S</span></div>   
            <ul className="space-x-6 text-white text-lg hidden md:flex">
                <li className="hover:text-blue-400 cursor-pointer transition duration-300">Features</li>
                <li className="hover:text-blue-400 cursor-pointer transition duration-300">Pricing</li>
                <li className="hover:text-blue-400 cursor-pointer transition duration-300">About</li>
                </ul>

                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg shadow-blue-500/30 transition duration-300 hidden md:inline-block"
>
                Get Started
                </button>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" md:hidden text-white focus:outline-none">

                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-900 p-6 md:hidden">

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg shadow-blue-500/30 transition duration-300">
                Get Started
                </button>
                
                <ul className="flex flex-col space-y-4 text-white text-lg mt-4 md:hidden">
                    <li className="hover:text-blue-400 cursor-pointer transition duration-300">Features</li>
                    <li className="hover:text-blue-400 cursor-pointer transition duration-300">Pricing</li>
                    <li className="hover:text-blue-400 cursor-pointer transition duration-300">About</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar