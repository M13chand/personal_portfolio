import useTitle from "../hooks/useTitle";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Services from "./Services";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

const Home = () => {
  useTitle("Home");
  return (
    <div className="bg-light-green">
      <LandingPage />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};
export default Home;
