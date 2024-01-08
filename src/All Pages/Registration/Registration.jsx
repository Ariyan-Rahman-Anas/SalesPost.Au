import registerBg from "./../../assets/Auth/Register.svg"
import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import Logo from "./../../assets/Logo.png";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     console.log(data)

    //registry
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
        setRegisterError("")
      })
    .catch (error=> {
      console.log(error.message);
      setRegisterError(error.message)
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
            <img src={registerBg} alt="" />
          </div>
          <div className="right flex-1 w-full">
            <h1 className="text-center font-semibold text-4xl mb-5 underline">
              Registration
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 "
            >
              <input
                type="text"
                placeholder="Full name"
                name="name"
                {...register("name", { required: true })}
                className="p-2 bg-blue-100 rounded-md focus:outline-none border-[.09rem] border-transparent focus:border-black focus:bg-transparent "
              />
              {errors.name && (
                <span className="text-sm text-[#f82457] ">Name's required</span>
              )}
              <input
                type="number"
                placeholder="Phone number"
                name="number"
                {...register("number", { required: true })}
                className="p-2 bg-blue-100 rounded-md focus:outline-none border-[.09rem] border-transparent focus:border-black focus:bg-transparent "
              />
              {errors.number && (
                <span className="text-sm text-[#f82457] ">
                  Phone number's required
                </span>
              )}
              <input
                type="email"
                placeholder="Email or phone number"
                name="email"
                {...register("email", { required: true })}
                className="p-2 bg-blue-100 rounded-md focus:outline-none border-[.09rem] border-transparent focus:border-black focus:bg-transparent "
              />
              {errors.email && (
                <span className="text-sm text-[#f82457] ">
                  Email's required
                </span>
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
              <p className="text-[#f82457] text-center ">{registerError}</p>
              <input
                type="submit"
                value="Sign Up"
                className="p-1.5 text-white bg-[#4169e1] rounded-md border-[.09rem] border-transparent cursor-pointer hover:border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] duration-500 "
              />
            </form>
            <div className="my-6 flex items-center justify-center gap-3 text-center ">
              <hr className="border-[.09rem] border-[#4169e1] w-full rounded-full " />
              <span className="font-light">or continue with</span>
              <hr className="border-[.09rem] border-[#4169e1] w-full rounded-full " />
            </div>
            <FaGooglePlusG className="text-center w-full text-4xl border-[.09rem] border-transparent rounded-md p-2 text-white bg-[#4169e1] cursor-pointer hover:border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] duration-500 "></FaGooglePlusG>
            <div className="flex items-center justify-center gap-2 mt-4 ">
              <p>Already have an account?</p>
              <Link to={"/login"} className="font-semibold text-[#4169e1] ">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;