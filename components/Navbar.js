import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 bg-opacity-75 shadow-lg fixed w-full z-10 transition duration-300 ease-in-out">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4">
          <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Home</Link>
            <Link href="#about" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">About</Link>
            <Link href="#experienceEducation" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Experience Education</Link>
            <Link href="#skills" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Skills</Link>
            <Link href="#contact" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Contact</Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-300 text-white flex flex-col space-y-4 p-4">
            <Link href="/" onClick={toggleMenu} className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Home</Link>
            <Link href="#about" onClick={toggleMenu} className="text-white hover:text-gray-200 transition duration-300 ease-in-out">About</Link>
            <Link href="#experienceEducation" onClick={toggleMenu} className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Experience Education</Link>
            <Link href="#skills" onClick={toggleMenu} className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Skills</Link>
            <Link href="#contact" onClick={toggleMenu} className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

