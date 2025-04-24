import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login.jsx";
import CreateTicket from "./components/CreateTicket.jsx";
import AdminCreateAgent from "./components/AdminCreateAgent.jsx";
import Register from "./components/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-ticket",
    element: <CreateTicket />,
  },
  {
    path: "/admin-create-agent",
    element: <AdminCreateAgent />,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
