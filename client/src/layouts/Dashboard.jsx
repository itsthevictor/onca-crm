import {
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
  redirect,
} from "react-router-dom";
import { Navbar, Menu, SelectCompany, UserModal } from "../components";

import Wrapper from "../assets/wrappers/Dashboard";
import { mainFetch } from "../utils/customFetch";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const DashboardContext = createContext();

export const dashboardLoader = async () => {
  try {
    const { data } = await mainFetch.get(`/users/current-user`);
    const { user } = data;

    if (!user) {
      return redirect("/autentificare");
    }
    return user;
  } catch (error) {
    return redirect("/autentificare");
  }
};

const Dashboard = () => {
  const [activeCompany, setActiveCompany] = useState("InnoZ");
  const [selectCompany, setSelectCompany] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const user = useLoaderData();
  const navigate = useNavigate();

  const logOutUser = async () => {
    navigate("/autentificare");
    await mainFetch.get("/auth/logout");
    toast.success("logged out");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        logOutUser,
        activeCompany,
        setActiveCompany,
        selectCompany,
        setSelectCompany,
        showLogout,
        setShowLogout,
      }}
    >
      <Wrapper>
        <main>
          <Navbar />
          <SelectCompany />
          <UserModal />
          <section className="dashboard-container">
            <Menu />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </section>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
