import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
//import MyRoutines from "./components/MyRoutines";
//import Activities from "./components/Activities";
import Users from "./components/users";
import { Activities, MyRoutines, Register, LogOut, Login } from "./components/";
// import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      // {
      //   path: "/users",
      //   element: <Users />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
      {
        path: "/MyRoutines",
        element: <MyRoutines />,
      },
      {
        path: "/Activities",
        element: <Activities />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
