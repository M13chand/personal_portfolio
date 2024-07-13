import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <CiFacebook />,
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      icon: <CiLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
    },
    {
      icon: <FaGithub />,
      name: "Github",
      url: "https://github.com/",
    },
    {
      icon: <CiInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      icon: <FaXTwitter />,
      name: "Twitter",
      url: "https://twitter.com/",
    },
  ];
  return (
    <div className="flex space-x-3 pt-8 transform ">
      {socialLinks.map((sl, index) => {
        return (
          <div
            key={index}
            className=" p-2 text-2xl rounded-full bg-slate-100 shadow-lg items-center justify-center  lg:hover:translate-y-3 ease-out duration-1000">
            <a href={sl.url} target="_blank" rel="noreferrer">
              {sl.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default SocialLinks;
