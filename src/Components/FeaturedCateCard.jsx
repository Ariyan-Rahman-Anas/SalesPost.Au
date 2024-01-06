const FeaturedCateCard = ({ category }) => {
    const { image, title, availableJobs } = category || {};
    return (
      <div className="relative group  ">
        <img
          src={image}
          alt="img of category"
          className="rounded-md group-hover:opacity-20 "
        />
        <div className="absolute bottom-0 bg-black group-hover:w-full group-hover:h-full group-hover:opacity-50 rounded-md duration-500"></div>
        <div
          className="absolute bottom-0 left-0 w-full pl-2 pb-2 rounded-md text-white"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.011), rgba(0,0,0,0.99))",
          }}
        >
          <h1 className="text-4xl font-semibold ">{title}</h1>
          <p className="group-hover:text-[#7698ff] font-semibold">
            {availableJobs} ads available
          </p>
        </div>
      </div>
    );
};

export default FeaturedCateCard;