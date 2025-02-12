import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Root from "./pages/Root";
import SignInPage from "./authPages/signIn/SignInPage";
import DashboardRoot from "./pages/DashboardRoot";
import EditResume from "./pages/EditResume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // { index: true, element: <Home /> },
      {
        path: "dashboard",
        element: <DashboardRoot />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "resume/:resumeId/edit", element: <EditResume /> },
        ],
      },
    ],
  },

  { path: "/auth/sign-in", element: <SignInPage /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
