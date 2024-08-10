import { Link } from "react-scroll"; // Import from react-scroll
import SocialLinks from "./SocialLinks"; // Ensure correct path

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 border-t border-gray-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Navigation Links */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4 text-orange-500">
              Navigation
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-orange-400 transition-colors cursor-pointer py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-orange-400 transition-colors cursor-pointer py-1">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-orange-400 transition-colors cursor-pointer py-1">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-orange-400 transition-colors cursor-pointer py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold  text-orange-500">
              Follow Me
            </h2>
            <SocialLinks />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-orange-500">
              Contact
            </h2>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:example@example.com"
                className="hover:text-orange-400 transition-colors flex items-center space-x-2 py-1">
                <span>manojchand082@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 border-t border-gray-300 pt-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Manoj Chand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
