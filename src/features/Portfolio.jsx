import { FaGithub } from "react-icons/fa";
import Button from "./Button";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1686, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 764, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center text-4xl font-bold text-blue-400">
        Portfolio
      </h1>
      <div className="flex justify-center py-10 ">
        <Carousel
          responsive={responsive}
          className="h-[600px] w-[900px] "
          infinite={true}
          autoPlaySpeed={1000}
          showDots={true}>
          {projects.map((project, i) => (
            <div key={i} className="flex justify-center ">
              <div className="w-[400px] h-[500px] rounded-xl shadow-lg ">
                <div className="h-[60%] shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div className="px-5 py-2 h-[45%]">
                  <h1 className="text-xl font-semibold">{project.name}</h1>
                  <p className="py-2">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button text="Code" icon={<FaGithub />} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
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
