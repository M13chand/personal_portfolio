import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import useTitle from "../hooks/useTitle";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiExpress, SiRedux } from "react-icons/si";

const Skills = () => {
  useTitle("Skills");

  const tech = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "#E76F51",
      backgroundColor: "#F5E6E1",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "#F4A261",
      backgroundColor: "#EDE7E3",
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
      color: "#80C4E9",
      backgroundColor: "#E1F5F9",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#F0DB4F",
      backgroundColor: "#FFF8E1",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DBFB",
      backgroundColor: "#E1F5F9",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "#764ABC",
      backgroundColor: "#EDE7E3",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F1502F",
      backgroundColor: "#FEE8E6",
    },
    {
      name: "Node Js",
      icon: <FaNodeJs />,
      color: "#68A063",
      backgroundColor: "#E6F4E8",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "#000000",
      backgroundColor: "#E7E7E7",
    },
    {
      name: "Vs Code",
      icon: <VscVscode />,
      color: "#007ACC",
      backgroundColor: "#E1F5FF",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Skills and Tools</h1>
      <div className="grid grid-cols-5 gap-5 py-12 place-items-center">
        {tech.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-5 w-full rounded-xl"
            style={{ backgroundColor: tech.backgroundColor }}>
            <div className="text-4xl" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <p className="text-lg font-bold" style={{ color: tech.color }}>
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
