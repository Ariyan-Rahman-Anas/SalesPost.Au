import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GalleryTabPostCard from "./GalleryTabPostCard";
import { Link } from "react-router-dom";

const TheTab = () => {
  const [galleryTabPost, setGalleryTabPost] = useState([])
  useEffect(() => {
    fetch("/galleryTab.json")
      .then((res) => res.json())
      .then((data) => setGalleryTabPost(data));
  },[])
  
    return (
      <div className="mt-5 mb-10">
        <Tabs className="text-center px-2">
          <TabList>
            <Tab>Gallery</Tab>
            <Tab>Recently Viewed</Tab>
            <Tab>Watch List</Tab>
            <Tab>Save Search</Tab>
          </TabList>

          <TabPanel>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryTabPost.map((post) => (
                <GalleryTabPostCard key={post.id} post={post}></GalleryTabPostCard>
              ))}
            </div> */}
            <div className="my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryTabPost.slice(0, 10).map((post) => (
                <GalleryTabPostCard
                  key={post.id}
                  post={post}
                ></GalleryTabPostCard>
              ))}
            </div>
            <Link to={"/galleryTabAllPost"} className="text-white bg-[#4169e1] px-6 py-1.5 border-[.09rem] border-transparent rounded-md hover:text-[#4169e1] hover:bg-transparent hover:border-[#4169e1] duration-500  " >See All</Link>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};
export default TheTab;



// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const TheTab = () => {
//   return (
//     <div className="my-10">
//       <Tabs className="text-center px-2">
//         <TabList className="flex justify-center">
//           <Tab className="my-custom-tab">Gallery</Tab>
//           <Tab className="my-custom-tab">Recently Viewed</Tab>
//           <Tab className="my-custom-tab">Watch List</Tab>
//           <Tab className="my-custom-tab">Save Search</Tab>
//         </TabList>

//         <TabPanel>
//           <h2>Any content 1</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel>
//       </Tabs>

//       <style jsx>{`
//         /* Add specific styles for the custom class */
//         .my-custom-tab {
//           padding: 8px 16px;
//           margin: 0 1rem; /* Add margin here */
//           border: 1.5px solid #4169e1;
//           border-radius: .3rem;
//           color:white;
//           background-color: #4169e1;
//           cursor: pointer;
//           transition: background-color 0.5s ease;
//         }

//         .my-custom-tab:hover {
//             color:#4169e1;
//           background-color: #fff;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TheTab;

