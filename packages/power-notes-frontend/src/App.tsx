import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "./home-page/HomePage";
import { ErrorPage } from "./error-components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
