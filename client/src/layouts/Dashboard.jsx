import {
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Navbar, Menu } from "../components";

import Wrapper from "../assets/wrappers/Dashboard";
import { mainFetch } from "../utils/customFetch";
import { createContext, useContext, useState } from "react";
const DashboardContext = createContext();

export const dashboardLoader = async () => {
  try {
    const { data } = await mainFetch.get(`/users/current-user`);
    const { user } = data;
    return user;
  } catch (error) {
    console.log(error);
    return { firstName: "Victor", lastName: "Alexa", role: "admin" };
    // return redirect("/autentificare");
  }
};

const Dashboard = () => {
  const user = useLoaderData();

  const navigation = useNavigation();
  const navigate = useNavigate();

  const logOutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("logging out");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        logOutUser,
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
