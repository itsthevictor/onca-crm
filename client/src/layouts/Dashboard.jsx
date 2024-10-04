import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
const Dashboard = () => {
  return (
    <main>
      <Navbar />
      <Menu />
      <div className="dashboard-container">
        <Outlet />
      </div>
    </main>
  );
};
export default Dashboard;
