import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex border border-gray-500">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
