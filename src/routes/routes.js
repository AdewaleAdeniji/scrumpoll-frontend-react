import CreateSession from "../pages/CreateSession";
import JoinSession from "../pages/JoinSession";
import App from "../pages/LandingPage";
import Dashboard from "../pages/app/app";

export const routes = [
    {
        path: "/",
        element: <App />,
        exact: true
    },
    {
        path: "/create-session",
        element: <CreateSession />,
        exact: true
    },
    {
        path: "/join-session/:default/:sessionID/:sessionPassword",
        element: <JoinSession />,
        exact: true
    },
    {
        path: "/session/:default/:sessionID/:sessionPassword",
        element: <Dashboard />,
        exact: true
    },
    {
        path: "*",
        element: <App />,
        exact: true
    },
]