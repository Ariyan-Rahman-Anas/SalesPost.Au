import Banner from "../../Components/Banner";
import BannerBG from "./../../assets/Banner/4.png"

const Home = () => {
    return (
      <div>
        <Banner
          BgIMG={BannerBG}
          heading={`Find, Buy, and`}
          heading2={"Live in Your Dream House!"}
          subHeading={
            "Explore premier properties effortlessly with SalesPost.au. Your dream home is just a click away – seamless, curated, and waiting for you."
          }
        />
      </div>
    );
};
export default Home;