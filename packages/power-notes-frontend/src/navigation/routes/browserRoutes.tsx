import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../../error/components/ErrorPage";
import { HomePage } from "../../home/HomePage";
import { JournalHome } from "../../journal/JournalHome";
import { NoteHome } from "../../note/NoteHome";
import { BasePage } from "../../root/BasePage";
import { TodoHome } from "../../todo/TodoHome";

export const BASE_APP_ROUTER = createBrowserRouter([
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
