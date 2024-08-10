import useTitle from "../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div id="about" className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-blue-300">About</span>
        <span className="text-orange-500"> Me</span>
      </h1>
      <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 ">
        <img className="w-full cover" src="/src/assets/About.gif" alt="" />
        <p className=" text-xl leading-8 lg:pt-9 lg:leading-[50px]">
          Hello, I'm Manoj Chand, a dedicated Computer Science student pursuing
          a Bachelor's degree in Computer Science and Information Technology.
          Since 2019, I have focused on expanding my skills in front-end
          development with React, backend development with Node.js, Express, and
          MongoDB. I am eager to contribute to the tech industry by delving
          deeper into these areas.
        </p>
      </div>
    </div>
  );
};
export default About;
