import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
import PageNotFound from "./features/PageNotFound";
import Contact from "./features/Contact";
import Portfolio from "./features/Portfolio";
import RootLayout from "./ui/RootLayout";
import Skills from "./features/Skills";
import Services from "./features/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/skills",
          element: <Skills />,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
