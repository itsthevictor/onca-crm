import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paper, CssBaseline } from '@mui/material';
import Dashboard, { dashboardLoader } from './layouts/Dashboard';
import Partners from './pages/Partners';
import Users, { usersLoader } from './pages/Users';
import Login, { loginAction } from './pages/Login';
import Register from './pages/Register';
import AddUser, { addUserAction } from './pages/AddUser';
import VerifyEmail, {
  verifyEmailAction,
  verifyEmailLoader,
} from './pages/VerifyEmail';
import Leads from './pages/Leads';
import Clients from './pages/Clients';
import Programmes from './pages/Programmes';
import Reports from './pages/Reports';
import Overview from './pages/Overview';
import Admin from './pages/Admin';
import Companies, { companiesAction, companiesLoader } from './pages/Companies';
import ForgotPassword, { forgotPasswordAction } from './pages/ForgotPassword';
import ResetPassword, {
  resetPasswordAction,
  resetPasswordLoader,
} from './pages/ResetPassword';
import Error from './pages/Error';
import Profile from './pages/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      loader: dashboardLoader,
      errorElement: <Error />,
      children: [
        {
          element: <Overview />,
          index: true,
        },
        {
          path: 'partners',
          element: <Partners />,
        },
        {
          path: 'useri',
          element: <Users />,
          loader: usersLoader,
        },
        {
          path: '/useri/adauga-user',
          element: <AddUser />,
          action: addUserAction,
        },
        {
          path: 'leads',
          element: <Leads />,
        },
        {
          path: 'clienti',
          element: <Clients />,
        },
        {
          path: 'masuri',
          element: <Programmes />,
        },
        {
          path: 'rapoarte',
          element: <Reports />,
        },
        {
          path: 'admin',
          element: <Admin />,
        },
        {
          path: '/admin/companii',
          element: <Companies />,
          action: companiesAction,
          loader: companiesLoader,
        },
        {
          path: 'profil',
          element: <Profile />,
        },
      ],
    },
    {
      path: 'autentificare',
      element: <Login />,
      action: loginAction,
    },
    {
      path: 'inregistrare',
      element: <Register />,
    },
    {
      path: 'am-uitat-parola',
      element: <ForgotPassword />,
      action: forgotPasswordAction,
    },
    {
      path: 'resetare-parola/:token?/:email?',
      element: <ResetPassword />,
      loader: resetPasswordLoader,
      action: resetPasswordAction,
    },
    {
      path: 'verify-email/:token?/:email?',
      element: <VerifyEmail />,
      loader: verifyEmailLoader,
      action: verifyEmailAction,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
