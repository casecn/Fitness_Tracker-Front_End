import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import {
  Login,
  Register,
  LogOut,
  Activities,
  MyRoutines,
  Home,
  CreateNewActivity,
} from "./components";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
      {
        path: "/Register",
        element: <Register />,
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
