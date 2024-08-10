import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-3 shadow-md flex items-center justify-between bg-white sticky top-0 z-50">
      <img className="w-12 h-12 ml-4" src="/src/assets/logo.png" alt="logo" />

      {/* Hamburger menu button visible only on small screens */}
      <button
        onClick={toggleMenu}
        className="text-2xl focus:outline-none mr-3 sm:hidden">
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>

      {/* Navigation links visible on larger screens, hidden on small screens */}
      <nav className="hidden sm:flex space-x-5 pr-4">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
          About
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
          Services
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
          Skills
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
          Portfolio
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
          Contact
        </Link>
      </nav>

      {/* Mobile menu visible only when toggled open */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-screen bg-white shadow-md lg:hidden z-50">
          <ul className="p-4 space-y-4 bg-gray-800 text-white">
            <li>
              <Link
                to="home"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={toggleMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
