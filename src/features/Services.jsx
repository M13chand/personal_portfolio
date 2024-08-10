import useTitle from "../hooks/useTitle";

const Services = () => {
  useTitle("Services");
  return (
    <div id="services" className="container mx-auto  ">
      <h1 className="text-4xl font-bold text-center  ">
        <span className="text-[#9D53C3]">What</span>
        <span className="text-[#CB9BBA]"> I Do?</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
        <div className="flex">
          <div className=" h-[125px] w-[200px] bg-purple-100 rounded-lg ">
            <img
              className="w-full h-full"
              src="/src/assets/Devices-pana.png
    "
              alt=""
            />
          </div>
          <div className="px-4">
            <h2 className="text-xl font-bold pb-2 "> Frontend Development</h2>
            <p>
              I design intuitive and responsive user interfaces using HTML, CSS,
              JavaScript, and React.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="h-[125px] w-[200px] bg-purple-100 rounded-lg">
            <img
              className="w-full "
              src="/src/assets/backend-image.png"
              alt=""
            />
          </div>
          <div className="px-4">
            <h2 className="text-xl font-bold pb-2"> Backend Development</h2>
            <p>
              I build secure and efficient server-side applications using
              Node.js, Express, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
