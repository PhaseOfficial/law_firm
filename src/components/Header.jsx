import { useState } from 'react';
import mysite from '../assets/spacebucks submark.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-navigation bg-opacity-40 text-primary py-4 px-6 backdrop-blur-md z-10">
            <div className="container mx-auto flex items-center justify-between">
            <a href="/"><img src={mysite} alt='logo' className="w-32 "/></a>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-white">Home</a>
                    <a href="" className="hover:text-white">Services</a>
                    <a href="" className="hover:text-white">About</a>
                    <a href="" className="hover:text-white">Contact</a>
                    
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center px-3 py-2 border rounded text-black border-red hover:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Icon for mobile menu (hamburger) */}
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-navigation bg-opacity-60 text-primary mt-2 py-4 rounded-lg shadow-lg">
                    <a href="/" className="block px-4 py-2 hover:bg-white/70">Home</a>
                    <a href="" className="block px-4 py-2 hover:bg-white/70">Services</a>
                    <a href="" className="block px-4 py-2 hover:bg-white/70">About</a>
                    <a href="" className="block px-4 py-2 hover:bg-white/70">Contact</a>
      
                </div>
            )}
        </nav>
    );
}
