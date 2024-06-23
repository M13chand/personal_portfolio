import SocialLinks from "../features/SocialLinks";

const Footer = () => {
  return (
    <div className="py-3 px-5 bg-slate-300 flex items-center space-x-[300px] ">
      <SocialLinks />
      <p className="text-center text-gray-500 ">
        Copyright &copy; 2024 | All rights reserved by Manoj Chand
      </p>
    </div>
  );
};
export default Footer;
