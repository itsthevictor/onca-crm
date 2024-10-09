import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard, { dashboardLoader } from "./layouts/Dashboard";
import Partners from "./pages/Partners";
import Login, { loginAction } from "./pages/Login";
import Register from "./pages/Register";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
