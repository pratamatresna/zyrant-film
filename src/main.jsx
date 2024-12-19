import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErorrPage from "./Pages/404.jsx";
import FilmPage from "./Pages/film.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
    errorElement: <ErorrPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/film",
    element: <FilmPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
