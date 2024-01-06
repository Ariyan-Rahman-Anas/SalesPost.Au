import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

const Search = () => {
  return (
    <div>
      <div className="search-bar py-4 grid md:grid-cols-12 gap-">
        <div className="categories flex items-center justify-start gap-2 md:col-span-2 hover:bg-blue-50 rounded-md group p-4">
          <HiOutlineMenuAlt2 className="text-3xl text-[#4169e1] "></HiOutlineMenuAlt2>
          <select name="" id="" className="group-hover:bg-blue-50">
            <option value="">All Categories</option>
          </select>
        </div>
        <div className="search-field md:col-span-6">
          <input
            type="text"
            placeholder="I'm looking for..."
            className="w-full p-5 focus:outline-none hover:bg-blue-50 rounded-md "
          />
        </div>
        <div className="location group rounded-md flex items-center justify-start md:justify-center gap-2 md:col-span-2 md:text-center hover:bg-blue-50">
          <MdOutlineLocationOn className="text-3xl text-[#4169e1] group-hover:bg-blue-50 "></MdOutlineLocationOn>
          <input
            type="text"
            placeholder="Australia"
            readOnly
            className="py-5 focus:outline-none group-hover:bg-blue-50 rounded-md "
          />
        </div>
        <div className="area group md:col-span-2 md:text-center p-5 hover:bg-blue-50 rounded-md ">
          <select name="" className="group-hover:bg-blue-50">
            <option value="">+ 0 KM</option>
            <option value="">2 KM</option>
            <option value="">5 KM</option>
            <option value="">10 KM</option>
            <option value="">20 KM</option>
            <option value="">50 KM</option>
            <option value="">100 KM</option>
            <option value="">250 KM</option>
            <option value="">500 KM</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Search;
