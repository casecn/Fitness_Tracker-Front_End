import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-full h-full">
      <nav className="bg-black text-slate-50">
        <div className="flex justify-items-start px-10 py-8 text-lg space-x-4">
          <NavLink to={`/Home`} className={"active flex-none w-15 h-5"}>
            Fitness Tracker
          </NavLink>
      
          <div className="flex flex-row space-x-4 text-xs" >
            <Link to={"/Home"} >
              Home
            </Link>
            <Link to={"/MyRoutines"} >
              MyRoutines
            </Link>
            <Link to={"/Activities"} >
              Activities
            </Link>
            <Link to={"/CreateNewActivity"} >
              Create a New Activity!
            </Link>
            <Link to={"/login"}>
              Login
            </Link>
            <Link to={"/register"} >
              Register
            </Link>
            <Link to={"/logout"} className="text-black text-xl">
              Log Out!
            </Link>
          </div>
        </div>
      </nav>
      <div className="border-black">
        <Outlet />
      </div>
    </div>
  );
}
