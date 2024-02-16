import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../error/components/ErrorPage";
import { JournalHome } from "../journal/JournalHome";
import { NoteHome } from "../note/NoteHome";
import { TodoHome } from "../todo/TodoHome";
import "./App.css";
import { Page } from "./Page";
import { HomePage } from "../home/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page />,
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
    return <RouterProvider router={router} />;
}

export default App;
