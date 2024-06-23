import useTitle from "../hooks/useTitle";

const Services = () => {
  useTitle("Services");
  return (
    <div>
      <h1 className="text-5xl text-center">What I Do?</h1>
      <div className="grid gird-cols-2">
        <h2 className="text-4xl"> Frontend Development</h2>
        <p>
          I design intuitive and responsive user interfaces using HTML, CSS,
          JavaScript, and React.
        </p>
        <img
          className=" h-[300px] w-[300px] "
          src="/src/assets/Devices-pana.png
    "
          alt=""
        />
      </div>

      <div>
        <h2 className="text-4xl"> Backend Development</h2>
        <p>
          I build secure and efficient server-side applications using Node.js,
          Express, and MongoDB.
        </p>
        <img
          className=" h-[300px] w-[300px] "
          src="/src/assets/backend-image.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Services;
