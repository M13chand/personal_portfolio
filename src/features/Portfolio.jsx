import { FaGithub } from "react-icons/fa";
import Button from "./Button";

const Portfolio = () => {
  return (
    <div id="portfolio" className="container mx-auto ">
      <h1 className="text-center text-4xl font-bold text-orange-600 mb-12">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full max-w-md md:max-w-sm lg:max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
            <img
              className="w-full h-64 object-cover lg:h-48" // Adjust the height for larger screens
              src={project.image}
              alt={project.name}
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                {project.name}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4">
                <Button
                  text="Code"
                  icon={<FaGithub className="inline mr-2" />}
                  backgroundColor="bg-orange-400"
                  color="text-white"
                  hover="bg-orange-500"
                  onClick={() => window.open(project.github, "_blank")}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa",
    image: "/src/assets/contact.gif",
    github: "https://github.com/",
  },
  {
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa",
    image: "/src/assets/contact.gif",
    github: "https://github.com/",
  },
  {
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa",
    image: "/src/assets/contact.gif",
    github: "https://github.com/",
  },
  {
    name: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa",
    image: "/src/assets/contact.gif",
    github: "https://github.com/",
  },
];

export default Portfolio;
