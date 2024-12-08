import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Component/Body";
import Header from "./src/Component/Header";
import Footer from "./src/Component/Footer";
import About from "./src/Component/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./src/Component/Contact";
import Login from "./src/Component/Login";
import ErrorPage from "./src/Component/ErrorPage";
import SignUp from "./src/Component/SignUp";
import User from "./src/Component/User";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
