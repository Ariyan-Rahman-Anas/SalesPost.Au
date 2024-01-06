const Banner = ({ BgIMG, heading, heading2, subHeading }) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(to top, rgba(70, 110, 255, 0.9), rgba(70, 110, 255, 0.4)), url(${BgIMG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", // or "50% 50%"
  };

  return (
    <div
      style={bannerStyle}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center  text-white px-2 ">
        <h1 className="text-5xl md:text-7xl font-normal mb4">{heading}</h1>
        <h1 className="text-5xl md:text-7xl font-normal mb4">{heading2}</h1>
        <p className="text-sm mt-4 font-semibold">{subHeading}</p>
      </div>
    </div>
  );
};

export default Banner;