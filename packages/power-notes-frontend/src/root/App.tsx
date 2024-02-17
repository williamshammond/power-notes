import { useMediaQuery } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../error/components/ErrorPage";
import { HomePage } from "../home/HomePage";
import { JournalHome } from "../journal/JournalHome";
import { NoteHome } from "../note/NoteHome";
import { DarkModeProvider } from "../themes/DarkModeProvider";
import { ThemeProviderWithDarkMode } from "../themes/ThemeProviderWithDarkMode";
import { TodoHome } from "../todo/TodoHome";
import "./App.css";
import { BasePage } from "./BasePage";

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
        <ThemeProviderWithDarkMode isDarkMode={prefersDarkMode}>
            <DarkModeProvider initialDarkMode={prefersDarkMode}>
                <RouterProvider router={router} />
            </DarkModeProvider>
        </ThemeProviderWithDarkMode>
    );
}

export default App;
