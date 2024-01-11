import { Link } from "react-router-dom";

const GalleryTabPostCard = ({ post }) => {
    const {id, name,img, price, location, description} = post || {}
    return (
      <Link to={`/galleryTabPostDetails/${id}`}>
        <div className="shadow-lg rounded-md overflow-hidden group relative ">
          <img
            src={img}
            alt=""
            className="w-full rounded-t-md group-hover:scale-110 duration-500 "
          />
          <div className="my-2">
            <h1 className="font-semibold">{name} </h1>
            <p className="font-light text-gray-500">{location}</p>
          </div>
          <p className="absolute left-0 top-0 px-2 py-1 text-white bg-[#4169e1] ">
            ${price}{" "}
          </p>
        </div>
      </Link>
    );
};

export default GalleryTabPostCard;