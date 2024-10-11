import SocialLinks from "./SocialLinks";
import Button from "./Button";
import { Link } from "react-scroll";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-[#6D99FE]">Hello, I'm </span>
            <span className="text-orange-400">Manoj Chand.</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold py-4">
            Web Developer
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl pb-6">
            A passionate individual focused on developing end-to-end products
            that create sustainable and scalable social and technical systems
            for impactful results.
          </p>
          <div className="flex flex-row space-x-4">
            {/* Download CV */}
            <a
              href="/path/to/your/resume.pdf" // Replace with the correct path
              download="Manoj_Chand_Resume.pdf"
              className="block">
              <Button
                text="Hire me"
                backgroundColor="bg-orange-400"
                color="text-white"
                hover="bg-orange-500"
                className="focus:outline-none"
              />
            </a>

            {/* Navigate to contact page */}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Button
                text="Let's Talk"
                backgroundColor="bg-cyan-200"
                color="text-black"
                hover="bg-cyan-300"
              />
            </Link>
          </div>
          <SocialLinks />
        </div>

        <div className="flex justify-center items-center">
          <img
            className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl"
            src="/assets/Programming-bro.png"
            alt="Landing Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
