import { Outlet, useLoaderData, redirect } from "react-router-dom";
import { Navbar, Menu } from "../components";
import axios from "axios";
import Wrapper from "../assets/wrappers/Dashboard";
import { mainFetch } from "../utils/customFetch";

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
  console.log(user);

  return (
    <Wrapper>
      <main>
        <Navbar user={user} />
        <section className="dashboard-container">
          <Menu />
          <div className="dashboard-page">
            <Outlet user={user} />
          </div>
        </section>
      </main>
    </Wrapper>
  );
};
export default Dashboard;
