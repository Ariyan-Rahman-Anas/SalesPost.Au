import img1 from "./../assets//Carousel/1.png"
import img2 from "./../assets//Carousel/2.png"
import img3 from "./../assets//Carousel/3.png"
import img4 from "./../assets//Carousel/4.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

const TheCarousel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[50vh] text-white p-5 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div>
              <h1 className="font-normal text-3xl md:text-5xl">
                Looking to make some extra cash?
              </h1>
              <p className="text-sm my-4 ">
                Find out your car's value with our instant car valuation & sell
                where the buyers are.
              </p>
              <Link className="text-white bg-[#4169e1] px-5 py-2 rounded-md hover:text-[#4169e1] hover:bg-white duration-500 font-semibold ">
                Start Now
              </Link>
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="w-full rounded-md hover:scale-110 duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[50vh] text-white p-5 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div>
              <h1 className="font-normal text-3xl md:text-5xl">
                Get the most out of your ad
              </h1>
              <p className="text-sm my-4 ">
                Check out our tips & tricks for success on SalesPost.Au.
              </p>
              <Link className="text-white bg-[#4169e1] px-5 py-2 rounded-md hover:text-[#4169e1] hover:bg-white duration-500 font-semibold ">
                Start Now
              </Link>
            </div>
            <div>
              <img
                src={img2}
                alt=""
                className="w-full rounded-md hover:scale-110 duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[50vh] text-white p-5 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div>
              <h1 className="font-normal text-3xl md:text-5xl">
                Buy & sell safely
              </h1>
              <p className="text-sm my-4 ">
                Find out your car's value with our instant car valuation & sell
                where the buyers are.
              </p>
              <Link className="text-white bg-[#4169e1] px-5 py-2 rounded-md hover:text-[#4169e1] hover:bg-white duration-500 font-semibold ">
                Start Now
              </Link>
            </div>
            <div>
              <img
                src={img3}
                alt=""
                className="w-full rounded-md hover:scale-110 duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${img4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[50vh] text-white p-5 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div>
              <h1 className="font-normal text-3xl md:text-5xl">
                Looking to make some extra cash?
              </h1>
              <p className="text-sm my-4 ">
                Find out your car's value with our instant car valuation & sell
                where the buyers are.
              </p>
              <Link className="text-white bg-[#4169e1] px-5 py-2 rounded-md hover:text-[#4169e1] hover:bg-white duration-500 font-semibold ">
                Start Now
              </Link>
            </div>
            <div>
              <img
                src={img4}
                alt=""
                className="w-full rounded-md hover:scale-110 duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default TheCarousel;