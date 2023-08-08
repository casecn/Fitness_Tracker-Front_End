import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-full h-">
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
            <hr className="w=10" />
            <div className="flex-1">
              <div className="mr-10">
                <Link to={"/Home"} className="text-white text-xl mr-10">
                  Home
                </Link>
                <br />
                <Link to={"/MyRoutines"} className="text-black text-xl mr-10">
                  MyRoutines
                </Link>
                <br />
                <Link to={"/Activities"} className="text-white text-xl">
                  Activities
                </Link>
                <br />
                <Link to={"/CreateNewActivity"} className="text-white text-xl">
                  Create a New Activity!
                </Link>
                <hr />
                <br />
                <Link to={"/login"} className="text-black text-xl">
                  Login
                </Link>
                <br />
                <Link to={"/register"} className="text-black text-xl">
                  Register
                </Link>
                <br />
                <Link to={"/logout"} className="text-black text-xl">
                  Log Out!
                </Link>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="border-black">
        <Outlet />
      </div>
    </div>
  );
}
