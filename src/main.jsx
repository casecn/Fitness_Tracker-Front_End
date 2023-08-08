import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Root from "./routes/root";
import MyRoutines from "./components/MyRoutines";
import Activities from "./components/Activities";
import Users from "./components/users";
import Register from "./components/Register";
import CreateNewActivity from "./components/CreateNewActivity";
import Home from "./components/Home";

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
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/MyRoutines",
        element: <MyRoutines />,
      },
      {
        path: "/Activities",
        element: <Activities />,
      },
      {
        path: "/CreateNewActivity",
        element: <CreateNewActivity />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
