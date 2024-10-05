import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
const Dashboard = () => {
  return (
    <main>
      <Navbar />

      <div className="dashboard-container">
        <Menu />
        <Outlet />
      </div>
    </main>
  );
};
export default Dashboard;
