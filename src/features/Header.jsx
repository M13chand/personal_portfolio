import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Handle window resize
  const handleResize = () => {
    // Check if the window width is above or below the breakpoint for small screens (e.g., 640px)
    if (window.innerWidth >= 640) {
      // Close the menu when on larger screens
      setIsOpen(false);
    }
  };

  // Add and clean up resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="py-3 shadow-md flex items-center justify-between bg-white sticky top-0 z-50">
      <img className="w-12 h-12 ml-4" src="/src/assets/logo.png" alt="logo" />

      {/* Hamburger menu button visible only on small screens */}
      <button
        onClick={toggleMenu}
        className="text-2xl focus:outline-none mr-3 sm:hidden flex items-center justify-center w-12 h-12 fixed top-3 right-3 z-50 transition-transform duration-300"
        style={{
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
        }}>
        <svg
          className={`w-6 h-6 absolute transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
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
        <svg
          className={`w-6 h-6 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
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
      </button>

      {/* Navigation links visible on larger screens */}
      <nav className="hidden sm:flex space-x-5 pr-4">
        {["home", "about", "services", "skills", "portfolio", "contact"].map(
          (section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-orange-500" // Add active class for active link
              className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          )
        )}
      </nav>

      {/* Mobile menu visible only when toggled open */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-center justify-center space-y-5 z-40 transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}>
        {["home", "about", "services", "skills", "portfolio", "contact"].map(
          (section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer text-xl hover:text-orange-500 transition-colors duration-300">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
