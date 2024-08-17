import React from "react";
import SocialLinks from "./SocialLinks";
import Button from "./Button";
import { Link } from "react-scroll"; // Assuming you're using react-scroll

const LandingPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 py-12">
        <div>
          <h1 className="text-4xl font-bold lg:text-8xl">
            <span className="text-[#6D99FE]">Hello, I'm </span>
            <span className="text-orange-400">Manoj Chand.</span>
          </h1>
          <h2 className="text-3xl font-bold py-6 lg:text-6xl">Web Developer</h2>
          <p className="pb-6 text-xl md:text-2xl">
            A passionate individual focused on developing end-to-end products
            that create sustainable and scalable social and technical systems
            for impactful results.
          </p>
          <div className="flex space-x-5">
            {/* Download CV */}
            <a
              href="/path/to/your/resume.pdf" // Replace with the correct path
              download="Manoj_Chand_Resume.pdf">
              <Button
                text="Hire me"
                backgroundColor="bg-orange-400"
                color="text-white"
                hover="bg-orange-500"
              />
            </a>

            {/* Scroll to contact section */}
            <Link
              to="contact" // The ID of the contact section
              smooth={true}
              duration={500}
              className="cursor-pointer">
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

        <div className="sm:pt-12">
          <img
            className="w-full cover"
            src="/src/assets/landingimage.png"
            alt="Landing Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
