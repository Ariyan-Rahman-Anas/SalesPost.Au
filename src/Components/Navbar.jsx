import { Link, NavLink } from "react-router-dom";
import Logo from "./../assets/Logo.png"
const Navbar = () => {
    return (
      <div>
        <nav className="flex items-center justify-between p-2">
          <div className="navbar-start w-[6rem] md:w-[8rem] lg:w-[10rem] ">
            <Link to={"/"}>
              <img src={Logo} alt="the website Logo" className="w-full" />
            </Link>
          </div>
          <div className="navbar-center hidden md:block">
            <ul className="flex items-center justify-center gap-6">
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Home & Garden
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Pets
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Car & Vehicles
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Jobs
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Real Estate
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Services for Hire
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="px-5 py-2 rounded-md font-semibold text-white bg-[#4169e1] border-[.09rem] border-transparent hover:text-[#4169e1] hover:bg-transparent hover:border-[#4160e1] duration-500 ">Log in</Link>
          </div>
        </nav>
      </div>
    ); 
};

export default Navbar;