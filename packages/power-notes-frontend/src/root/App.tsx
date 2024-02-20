import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useMediaQuery } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { BASE_APP_ROUTER } from "../navigation/routes/browserRoutes";
import { DarkModeProvider } from "../themes/DarkModeProvider";
import { ThemeProviderWithDarkMode } from "../themes/ThemeProviderWithDarkMode";
import "./App.css";

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <DarkModeProvider initialDarkMode={prefersDarkMode}>
            <ThemeProviderWithDarkMode>
                <RouterProvider router={BASE_APP_ROUTER} />
            </ThemeProviderWithDarkMode>
        </DarkModeProvider>
    );
}

export default App;
