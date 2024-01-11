import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../assets/Logo.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext) 
  const navigate = useNavigate()
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login")
        toast.success("Log out Successful!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
    return (
      <div>
        <nav className="flex items-center justify-between p-2">
          <div className="navbar-start w-[6rem] md:w-[8rem] ">
            <Link to={"/"}>
              <img src={Logo} alt="the website Logo" className="w-full" />
            </Link>
          </div>
          <div className="navbar-left-center hidden md:block">
            <ul className="flex items-center justify-center gap-6">
              <li className="relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Home & Garden
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
                <ul className="drop-Down-1 px-5 py-3 w-[28rem] hidden group-hover:grid duration-500 absolute top-[1.55rem] text-white bg-[#4169e1] rounded-sm grid-cols-2 gap-4 z-50 ">
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Appliances</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Home Decor</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Builder & Tradies</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Kitchen & Dining</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Building Materials</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Lighting</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Cleaning Services</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Tools and DIY</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Furniture</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Other Home and Garden</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Garden</Link>
                  </li>
                </ul>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Car & Vehicles
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
                  Jobs
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="relative group hidden lg:block">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Real Estate
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="tex-white relative group hidden lg:block">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  Services for Hire
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-middle-center-1 hidden md:block z-50 ">
            <ul className="flex items-center justify-center gap-6">
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                  More...
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
                <ul className="drop-Down-1 px-5 py-3 w-[28rem] hidden group-hover:grid duration-500 absolute right-0 top-[1.55rem] text-white bg-[#4169e1] rounded-sm grid-cols-2 gap-4 ">
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Antiques & Art</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Baby & Children</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Boats & Jet Skis</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Books, Music & Games</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Clothing & Jewellery</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Community</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Electronics & Computer</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Freebies</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Miscellaneous Goods</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Resumes</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Sport & Fitness</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Tickets</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Swap/Trade</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-middle-center-2 md:hidden z-50 ">
            <ul className="flex items-center justify-center gap-6">
              <li className="tex-white relative group">
                <NavLink  className="group-hover:text-[#4169e1]">
                  All Categories
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
                <ul className="drop-Down-1 px-5 py-3 w-[15rem]  hidden group-hover:flex duration-500 absolute right-0 top-[2.5rem] text-white bg-[#4169e1] rounded-sm flex-col gap-1 ">
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Antiques & Art</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Baby & Children</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Boats & Jet Skis</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Books, Music & Games</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Clothing & Jewellery</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Community</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Electronics & Computer</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Freebies</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Miscellaneous Goods</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Resumes</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Sport & Fitness</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Tickets</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Swap/Trade</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Appliances</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Home Decor</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Builder & Tradies</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Kitchen & Dining</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Building Materials</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Lighting</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Cleaning Services</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Tools and DIY</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Furniture</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Other Home and Garden</Link>
                  </li>
                  <li className="tex-white w-fit hover:underline">
                    <Link to={"/"}>Garden</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {user && (
            <div className="navbar-right-center">
              <ul className="flex items-center justify-center gap-6">
                <li className="tex-white relative group">
                  <NavLink to={"/"} className="group-hover:text-[#4169e1]">
                    My SalesPost
                    <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#4169e1] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          <div className="navbar-end">
            {user ? (
              <Link
                onClick={handleLogOut}
                className="px-5 py-2 rounded-md font-semibold text-white bg-[#4169e1] border-[.09rem] border-transparent hover:text-[#4169e1] hover:bg-transparent hover:border-[#4160e1] duration-500 "
              >
                Log out
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="px-5 py-2 rounded-md font-semibold text-white bg-[#4169e1] border-[.09rem] border-transparent hover:text-[#4169e1] hover:bg-transparent hover:border-[#4160e1] duration-500 "
              >
                Log in
              </Link>
            )}
          </div>
        </nav>
      </div>
    ); 
};

export default Navbar;