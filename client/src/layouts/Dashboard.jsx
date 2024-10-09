import { Outlet, useLoaderData } from "react-router-dom";
import { Navbar, Menu } from "../components";
import axios from "axios";

export const dashboardLoader = async () => {
  // try {
  //   const { data } = await axios.get(
  //     `https://randommer.io/api/Name?nameType=fullname&quantity=1`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Api-Key": "99c18ce9e984478282c1f74e6277df0a",
  //       },
  //     }
  //   );
  //   return data;
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }

  return null;
};

const Dashboard = () => {
  // const data = useLoaderData();
  const data = { firstName: "Lewis", lastName: "Hamilton" };

  return (
    <main>
      <Navbar data={data} />

      <div className="dashboard-container">
        <Menu />
        <Outlet />
      </div>
    </main>
  );
};
export default Dashboard;
