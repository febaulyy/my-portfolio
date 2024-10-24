import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-560 shadow-lg fixed w-full z-10 transition duration-300 ease-in-out">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
          <div className="flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Home</Link>
            <Link href="#about" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">About</Link>
            <Link href="#experience" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Experience Education</Link> 
            <Link href="#skills" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Skills</Link> 
            <Link href="#contact" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
