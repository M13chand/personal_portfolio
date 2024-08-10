import useTitle from "../hooks/useTitle";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Services from "./Services";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  useTitle("Home");
  return (
    <div id="home" className="bg-[#F7F7F7] text-[#333333]">
      <Header />
      <LandingPage />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
