import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Auth0Provider
        domain="dev-y2cpnxrzduhff4xe.us.auth0.com"
        clientId="4Vgaa10GSIqKET8zlrlv5B17EokGZBVa"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Auth0Provider>
);
