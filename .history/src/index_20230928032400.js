import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Cart from './'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/cart",
    element:<>
    <AppNavbar/>
    <Cart/>
    </>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider>
    <App router={router} />
    </RouterProvider>
  </React.StrictMode>
);
