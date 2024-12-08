import {
  SquaresPlusIcon,
  Cog6ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

import { NavLink } from "react-router-dom";
import { ArrowLongRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { Edit, } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
      <div className="flex flex-col items-center bg-slate-700 gap-5 h-full py-5">
        {/* <img src={logo} alt="logo" /> */}
        <NavLink
          to="/dashboard/tasks"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-slate-700 text-white cursor-pointer"
              : "p-2 rounded-http://localhost:5173/dashboard/tasks2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          <SquaresPlusIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-slate-700 text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>

        <NavLink
          to="/dashboard/addProduct"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          Add
          <BookOpenIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/dashboard/editProduct"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          Edit
          <Edit className="h-7 w-7 group-hover:text-white " />
        </NavLink>

        <NavLink
          to="/dashboard/user"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          User
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>

        <NavLink
          to="/signUp"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          <ArrowLongRightIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer mt-auto"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all  mt-auto"
          }
        >
          <Cog6ToothIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
