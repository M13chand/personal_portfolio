import useTitle from "../hooks/useTitle";
import { FaCode, FaServer } from "react-icons/fa";

const Services = () => {
  useTitle("Services");

  return (
    <div
      id="services"
      className="container mx-auto px-4 py-8 md:py-12 bg-[#f8f9fa]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
        <span className="text-[#9D53C3]">What</span>
        <span className="text-[#CB9BBA]"> I Do?</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Frontend Development Card */}
        <div className="flex items-center bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] bg-[#9D53C3] flex items-center justify-center rounded-full">
            <FaCode className="text-3xl md:text-4xl text-white" />
          </div>
          <div className="ml-4 md:ml-6">
            <h2 className="text-xl md:text-2xl font-bold pb-1 md:pb-2 text-[#9D53C3]">
              Frontend Development
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              I design intuitive and responsive user interfaces using HTML, CSS,
              JavaScript, and React.
            </p>
          </div>
        </div>

        {/* Backend Development Card */}
        <div className="flex items-center bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] bg-[#CB9BBA] flex items-center justify-center rounded-full">
            <FaServer className="text-3xl md:text-4xl text-white" />
          </div>
          <div className="ml-4 md:ml-6">
            <h2 className="text-xl md:text-2xl font-bold pb-1 md:pb-2 text-[#CB9BBA]">
              Backend Development
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              I build secure and efficient server-side applications using
              Node.js, Express, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
