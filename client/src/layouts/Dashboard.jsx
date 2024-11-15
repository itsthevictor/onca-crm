import {
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
  redirect,
} from "react-router-dom";
import { Navbar, Menu } from "../components";

import Wrapper from "../assets/wrappers/Dashboard";
import { mainFetch } from "../utils/customFetch";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
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
  const [activeCompany, setActiveCompany] = useState("");
  const user = useLoaderData();
  const navigation = useNavigation();
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
      }}
    >
      <Wrapper>
        <main>
          <Navbar />
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
