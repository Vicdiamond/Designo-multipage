import {
  createBrowserRouter,
  RouterProvider,
  // ScrollRestoration,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import AppDesign from "./pages/app-design/AppDesign";
import GraphicDesign from "./pages/graphic-design/GraphicDesign";
import WebDesign from "./pages/web-design/WebDesign";
import Locations from "./pages/locations/Locations";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/app-design",
        element: <AppDesign />,
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "/web-design",
        element: <WebDesign />,
      },
      {
        path: "/location",
        element: <Locations />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// 7240139374:AAE8o5QtEknN34EhNl7ra5jsAg4cJHQrSKI
