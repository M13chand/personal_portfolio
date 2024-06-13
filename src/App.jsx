import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
