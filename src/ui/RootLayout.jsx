import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
