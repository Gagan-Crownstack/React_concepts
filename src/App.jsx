import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return (
    <div className="w-5/6 h-screens mx-auto h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
