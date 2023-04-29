import React from "react";
import Login from "./pages/Login";
import "./style.scss";
import Register from "./pages/Register";
import Home from "./pages/Home";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  // const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));
  return (
    <div>
      <Register />
      {/* <Home /> */}
    </div>
  );
};

export default App;
