import { FiDownload } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

const LandingPage = () => {
  return (
    <div className="grid grid-cols-2 pt-2  ">
      <div className="pl-[5rem] pt-[5rem]">
        <h1 className="text-4xl font-bold">
          <span className="text-[#6D99FE]">Hello I'm</span>
          <span className="text-orange-400"> Manoj</span>
        </h1>
        <h2 className="text-2xl font-bold py-3"> Web Developer</h2>
        <p className="pb-3">
          A passionate individual focused on developing end-to-end products that
          create sustainable and scalable social and technical systems for
          impactful results.
        </p>

        <button
          className="px-3 py-2 border-2 shadow-sm rounded-lg flex justify-between items-baseline
        gap-2 bg-orange-400 text-white">
          <FiDownload /> Resume
        </button>
      </div>

      <div className="ml-10">
        <img src="/src/assets/landingimage.gif" alt="" />
      </div>
    </div>
  );
};
export default LandingPage;
