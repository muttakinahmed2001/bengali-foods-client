import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import LoadingProvider from "./providers/LoadingProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LoadingProvider>
        {" "}
        <RouterProvider router={router}></RouterProvider>
      </LoadingProvider>
    </AuthProvider>
  </React.StrictMode>
);
