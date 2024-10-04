import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./layouts/Dashboard";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
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
