import { FaPencilAlt, FaGamepad, FaFilm, FaPenNib, FaInstagram, FaGithub } from 'react-icons/fa';

export default function HobbiesContact() {
    return (
        <div id="contact" className="min-h-screen bg-white text-gray-900 p-6 md:p-16 rounded-xl shadow-lg mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
                {/* Hobbies Section */}
                <div className="relative p-6 md:p-8 bg-gradient-to-r from-blue-400 to-blue-200 rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
                    <h3 className="absolute top-[-40px] md:top-[-60px] left-0 right-0 text-2xl md:text-3xl font-bold text-white text-center bg-blue-600 p-2 rounded-lg shadow-lg">My Hobbies</h3>
                    <ul className="space-y-4 md:space-y-6 text-white">
                        <li className="flex items-center space-x-2 animate-bounce">
                            <FaPencilAlt className="text-xl md:text-2xl" />
                            <p>Doodling & Drawing</p>
                        </li>
                        <li className="flex items-center space-x-2 animate-bounce">
                            <FaGamepad className="text-xl md:text-2xl" />
                            <p>Gaming</p>
                        </li>
                        <li className="flex items-center space-x-2 animate-bounce">
                            <FaFilm className="text-xl md:text-2xl" />
                            <p>Watching Movies</p>
                        </li>
                        <li className="flex items-center space-x-2 animate-bounce">
                            <FaPenNib className="text-xl md:text-2xl" />
                            <p>Writing</p>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="relative p-6 md:p-8 bg-gradient-to-r from-pink-600 to-pink-400 rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
                    <h3 className="absolute top-[-40px] md:top-[-60px] left-0 right-0 text-2xl md:text-3xl font-bold text-white text-center bg-pink-600 p-2 rounded-lg shadow-lg">Contact Me</h3>
                    <ul className="space-y-3 md:space-y-4 text-white">
                        <a href="https://www.instagram.com/izaasheiyoo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-white transition">
                            <FaInstagram size={24} />
                            <span>Instagram: @izaasheiyoo</span>
                        </a>

                        <a href="https://www.github.com/sheilalaaa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-white transition">
                            <FaGithub size={24} />
                            <span>Github: sheilalaaa</span>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}
