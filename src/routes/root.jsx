import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-full h-2">
      <nav className="bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-10 py-8 text-3xl">
            <NavLink
              to={`/Home`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Fitness Tracker
            </NavLink>

            <div className=" flex items-center">
              <div className="mr-10">
                <Link to={"/Home"} className="text-white text-2xl mr-10">
                  Home
                </Link>
                <Link to={"/MyRoutines"} className="text-black text-2xl mr-10">
                  MyRoutines
                </Link>
                <Link to={"/Activities"} className="text-white text-2xl">
                  Activities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
