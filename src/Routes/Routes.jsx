
import {
    createBrowserRouter,
  } from "react-router-dom";
import Regester from "../Pages/Regester/Regester";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: "/regester",
        element: <Regester></Regester>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
  ]);
