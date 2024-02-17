import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { BASE_APP_THEME } from "../themes/baseThemes.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-y2cpnxrzduhff4xe.us.auth0.com"
            clientId="4Vgaa10GSIqKET8zlrlv5B17EokGZBVa"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <ThemeProvider theme={BASE_APP_THEME}>
                <App />
            </ThemeProvider>
        </Auth0Provider>
    </React.StrictMode>
);
