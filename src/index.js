import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
