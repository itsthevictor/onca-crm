import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard, { dashboardLoader } from "./layouts/Dashboard";
import Partners from "./pages/Partners";
import Users from "./pages/Users";
import Login, { loginAction } from "./pages/Login";
import Register from "./pages/Register";
import AddUser, { addUserAction } from "./pages/AddUser";
import VerifyEmail, { verifyEmailLoader } from "./pages/VerifyEmail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      loader: dashboardLoader,
      children: [
        {
          path: "partners",
          element: <Partners />,
        },
        {
          path: "personal",
          element: <Users />,
        },
        {
          path: "adauga-user",
          element: <AddUser />,
          action: addUserAction,
        },
      ],
    },
    {
      path: "autentificare",
      element: <Login />,
      action: loginAction,
    },
    {
      path: "inregistrare",
      element: <Register />,
    },
    {
      path: "verify-email/:token?/:email?",
      element: <VerifyEmail />,
      loader: verifyEmailLoader,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
