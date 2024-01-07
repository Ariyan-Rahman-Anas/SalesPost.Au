import { Link } from "react-router-dom";

const PopularItem = () => {
    return (
      <div className="px-2 flex flex-col md:flex-row items-start justify-start gap-4 bg-blue-100 p-5 ">
        <div>
          <h1 className="font-semibold">Popular Items: </h1>
        </div>
        <div className="flex items-center justify-start gap-6 flex-wrap">
          <Link className="hover:text-[#4169e1] hover:underline ">Puppies</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Caravan</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Kitten</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Boat</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Dog</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Riding</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Cavoodle</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Trailer</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Hilux</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">
            Golden Retriever
          </Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Fridge</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">
            Border Collie
          </Link>
          <Link className="hover:text-[#4169e1] hover:underline ">UTE</Link>
          <Link className="hover:text-[#4169e1] hover:underline ">Car</Link>
        </div>
      </div>
    );
};
export default PopularItem;