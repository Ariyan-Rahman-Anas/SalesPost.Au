import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../All Pages/Home/Home";
import LogIn from "../All Pages/LogIn/LogIn";
import Registration from "../All Pages/Registration/Registration";
import GalleryTabAllPost from "../Components/GalleryTabAllPost";
import GalleryTabPostDetails from "../Components/GalleryTabPostDetails";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/galleryTabPostDetails/:id",
                element:<GalleryTabPostDetails></GalleryTabPostDetails>
            },
            {
                path: "/galleryTabAllPost",
                element:<GalleryTabAllPost></GalleryTabAllPost>
            },
            {
                path: "/login",
                element:<LogIn></LogIn>
            },
            {
                path: "/register",
                element:<Registration></Registration>
            }
        ]
    }
])

export default MainRoute;