import { useMediaQuery } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../error/components/ErrorPage";
import { HomePage } from "../home/HomePage";
import { JournalHome } from "../journal/JournalHome";
import { NoteHome } from "../note/NoteHome";
import { DarkModeProvider } from "../themes/DarkModeProvider";
import { TodoHome } from "../todo/TodoHome";
import "./App.css";
import { BasePage } from "./BasePage";
import { ThemeProviderWithDarkMode } from "../themes/ThemeProviderWithDarkMode";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "note",
                element: <NoteHome />,
                errorElement: <ErrorPage />,
            },
            {
                path: "todo",
                element: <TodoHome />,
                errorElement: <ErrorPage />,
            },
            {
                path: "journal",
                element: <JournalHome />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <DarkModeProvider initialDarkMode={prefersDarkMode}>
            <ThemeProviderWithDarkMode>
                <RouterProvider router={router} />
            </ThemeProviderWithDarkMode>
        </DarkModeProvider>
    );
}

export default App;
