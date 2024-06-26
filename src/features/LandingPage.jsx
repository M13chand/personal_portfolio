import SocialLinks from "./SocialLinks";
import Button from "./Button";
import { useNavigate } from "react-router";
const LandingPage = () => {
  const nav = useNavigate();
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-2 py-12 ">
        <div>
          <h1 className="text-6xl font-bold">
            <span className="text-[#6D99FE]">Hello I'm</span>
            <span className="text-orange-400"> Manoj Chand.</span>
          </h1>
          <h2 className="text-4xl font-bold py-6"> Web Developer</h2>
          <p className="pb-6 text-2xl">
            A passionate individual focused on developing end-to-end products
            that create sustainable and scalable social and technical systems
            for impactful results.
          </p>
          <div className="flex space-x-5">
            <Button text="Hire me" />
            <Button onclick={() => nav("/contact")} text="Let's  Talk" />
          </div>
          <SocialLinks />
        </div>

        <img
          className="w-full cover"
          src="/src/assets/landingimage.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default LandingPage;
