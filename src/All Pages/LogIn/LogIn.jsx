import { Link, useNavigate } from "react-router-dom";
import loginBG from "./../../assets/Auth/Login.svg"
import { FaGooglePlusG } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Logo from "./../../assets/Logo.png"
import toast from "react-hot-toast";


const LogIn = () => {
  const { logIn, signInWithGoogle } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate()
  

   const {
     register,
     handleSubmit,
     formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);

    //logIn
    logIn(data.email, data.password)
      .then(result => {
        console.log(result.user)
        navigate("/")
        toast.success("Log in Successful!");
        setLogInError("");
      })
      .catch(error => {
        console.log(error.message)
        setLogInError("Invalid email or password");
    })
  }

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate("/");
        toast.success("Log in Successful!");
        setLogInError("")
      })
      .catch(error => {
        console.log(error.message)
        setLogInError(error.message)
    })
  }

  return (
    <div>
      <Link to={"/"}>
        <div className="w-[12rem] mx-auto md:mx-0">
          <img src={Logo} alt="" className="w-full" />
        </div>
      </Link>
      <div className="flex flex-col md:flex-row items-center justify-between px-2 mb-2 lg:my-0">
        <div className="left flex-1 w-full">
          <img src={loginBG} alt="" />
        </div>
        <div className="right flex-1 w-full">
          <h1 className="text-center font-semibold text-4xl mb-8 underline">
            Login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 "
          >
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email or phone number"
              className="p-2 bg-blue-100 rounded-md focus:outline-none border-[.09rem] border-transparent focus:border-black focus:bg-transparent "
            />
            {errors.email && (
              <span className="text-sm text-[#f82457] ">Email's required</span>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              {...register("password", { required: true })}
              className="p-2 bg-blue-100 rounded-md focus:outline-none border-[.09rem] border-transparent focus:border-black focus:bg-transparent "
            />
            {errors.password && (
              <span className="text-sm text-[#f82457] ">
                Password's required
              </span>
            )}
            <p className="text-[#f82457] text-center">{logInError} </p>
            <input
              type="submit"
              value="Log In"
              className="p-1.5 text-white bg-[#4169e1] rounded-md border-[.09rem] border-transparent cursor-pointer hover:border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] duration-500 "
            />
          </form>
          <div className="my-6 flex items-center justify-center gap-3 text-center ">
            <hr className="border-[.09rem] border-[#4169e1] w-full rounded-full " />
            <span className="font-light">or continue with</span>
            <hr className="border-[.09rem] border-[#4169e1] w-full rounded-full " />
          </div>
          <FaGooglePlusG onClick={handleGoogleLogIn} className="text-center w-full text-4xl border-[.09rem] border-transparent rounded-md p-2 text-white bg-[#4169e1] cursor-pointer hover:border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] duration-500 "></FaGooglePlusG>
          <div className="flex items-center justify-center gap-2 mt-4 ">
            <p>Don't have an account?</p>
            <Link to={"/register"} className="font-semibold text-[#4169e1] ">
              Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;