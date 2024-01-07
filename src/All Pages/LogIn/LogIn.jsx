import { Link } from "react-router-dom";
import loginBG from "./../../assets/Auth/Login.svg"
import { FaGooglePlusG } from "react-icons/fa";

const LogIn = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-2 my-5 lg:my-0">
        <div className="left flex-1 w-full">
          <img src={loginBG} alt="" />
        </div>
        <div className="right flex-1 w-full">
          <h1 className="text-center font-semibold text-4xl mb-5 underline">
            Login
          </h1>
          <form className="flex flex-col gap-4 ">
            <input
              type="email"
              placeholder="Email or phone number"
              className="p-2 bg-blue-100 rounded-md focus:outline-none border-[.09rem] border-transparent focus:border-black focus:bg-transparent "
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 bg-blue-100 rounded-md focus:outline-none border-[.09rem] border-transparent focus:border-black focus:bg-transparent "
            />
            <input
              type="submit"
              value="Log In"
              className="p-1.5 text-white bg-[#4169e1] rounded-md border-[.09rem] border-transparent cursor-pointer hover:border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] duration-500 "
            />
          </form>
          <div className="my-6 flex items-center justify-center gap-3 text-center ">
            <hr className="border-[.09rem] border-[#4169e1] w-full rounded-full " />
            <span className="text-xl font-light w-f">or continue with</span>
            <hr className="border-[.09rem] border-[#4169e1] w-full rounded-full " />
          </div>
                <FaGooglePlusG className="text-center w-full text-4xl border-[.09rem] border-transparent rounded-md p-2 text-white bg-[#4169e1] cursor-pointer hover:border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] duration-500 "></FaGooglePlusG>
                <div className="flex items-center justify-center gap-2 mt-4 ">
                    <p>Don't have an account?</p>
                    <Link to={"/register"} className="font-semibold text-[#4169e1] ">Registration</Link>
                </div>
        </div>
      </div>
    );
};

export default LogIn;