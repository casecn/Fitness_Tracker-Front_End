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
            <br />
            <button
              className="text-white focus:outline-none focus:text-white lg:hidden"
              type="button"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="heroicon-ui"
                  d="M20 12H4M20 6H4M20 18H4"
                ></path>
              </svg>
              <br />
            </button>
            <div className=" flex items-left">
              <div className="mr-20">
                <Link to={"/home"} className="text-white text-xl mr-10">
                  Home
                </Link>
                <Link to={"/MyRoutines"} className="text-white text-xl mr-10">
                  MyRoutines
                </Link>
                <br />
                <Link to={"/Activities"} className="text-white text-xl">
                  Activities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
