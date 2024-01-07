import { Link } from "react-router-dom";
import Icon from "./../assets/Icon.png"
import AppleApp from "./../assets/AppStore/Apple.svg"
import AndroidApp from "./../assets/AppStore/Android.svg"
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const AppStore = () => {
    return (
      <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-5 px-2 bg-black text-white ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-[5rem] p-2 ">
            <img src={Icon} alt="the project icon" className="w-full" />
          </div>
          <div>
            <h1 className="font-semibold text-xl">
              Download the SalesPost app for iOS or Android
            </h1>
            <p className="text-sm text-gray-300 my-1 ">
              Buy and sell faster on the go
            </p>
            <div className="flex items-center justify-normal gap-4 text-gray-300">
              <div className="flex items-center justify-start">
                <IoMdStar></IoMdStar>
                <IoMdStar></IoMdStar>
                <IoMdStar></IoMdStar>
                <IoMdStar></IoMdStar>
                <IoMdStarHalf></IoMdStarHalf>
                        </div>
                        <p>671K</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-center gap-5 w-full md:w-fit  ">
          <Link>
            <img src={AppleApp} alt="" />
          </Link>
          <Link>
            <img src={AndroidApp} alt="" />
          </Link>
        </div>
      </div>
    );
};

export default AppStore;