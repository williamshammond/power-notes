import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../../error/components/ErrorPage";
import { HomePage } from "../../home/HomePage";
import { JournalHome } from "../../journal/JournalHome";
import { NoteHome } from "../../note/NoteHome";
import { BasePage } from "../../root/BasePage";
import { TodoHome } from "../../todo/TodoHome";
import { NoteFileView } from "../../note/NoteFileView";
import { JournalFileView } from "../../journal/JournalFileView";
import { TodoFileView } from "../../todo/TodoFileView";

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
                path: "notes",
                element: <NoteHome />,
                errorElement: <ErrorPage />,
            },
            {
                path: "note/:noteId",
                element: <NoteFileView />,
                errorElement: <ErrorPage />,
            },
            {
                path: "todo",
                element: <TodoHome />,
                errorElement: <ErrorPage />,
            },
            {
                path: "todo/:todoId",
                element: <TodoFileView />,
                errorElement: <ErrorPage />,
            },
            {
                path: "journal",
                element: <JournalHome />,
                errorElement: <ErrorPage />,
            },
            {
                path: "journal/:journalId",
                element: <JournalFileView />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);
