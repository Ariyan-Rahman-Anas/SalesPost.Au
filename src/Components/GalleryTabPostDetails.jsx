// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const GalleryTabPostDetails = () => {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         fetch("/galleryTab.json")
//             .then(res => res.json())
//         .then(data=>setPosts(data))
//     }, [])
    
//     const { id } = useParams();
//     const intId = parseInt(id)
//     const checkingPostId = posts.find((post) => post.id === intId)
//     return (
//         <div>
//             <h1>{checkingPostId.name} </h1>
//         </div>
//     );
// };
// export default GalleryTabPostDetails;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GalleryTabPostDetails = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const intId = parseInt(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/galleryTab.json");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const checkingPostId = posts.find((post) => post.id === intId);

  return (
    <div>
      <div className="relative">
        <img src={checkingPostId?.img} alt="" className="w-full h-[75vh]" />
        <h1
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.99))",
          }}
          className="absolute pt-10 pb-5  left-0 text-center w-full bottom-0 text-7xl font-normal text-white px-10 "
        >
          {checkingPostId?.name}
        </h1>
      </div>
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto my-10 text-sm ">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-2xl "><span className="text-[#4169e1] ">Price:</span> {checkingPostId?.price}$</p>
          <p className="font-semibold text-2xl"><span className="text-[#4169e1] ">Location:</span> {checkingPostId?.location}</p>
        </div>
        <p className="mt-4">Post Id: {checkingPostId?.id} </p>
        <p className="text-gray-500 mt-1 ">{checkingPostId?.description} </p>
      </div>
    </div>
  );
};

export default GalleryTabPostDetails;