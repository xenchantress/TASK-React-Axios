import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import React from "react";
import PetDetail from "./components/PetDetail";
import PetList from "./components/PetList";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/pets", element: <PetList /> },
      { path: "/pets/:id", element: <PetDetail />,},
    ],
  },
]);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      </RouterProvider>
  </React.StrictMode>
);
