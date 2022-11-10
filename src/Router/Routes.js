import { createBrowserRouter } from "react-router-dom";
import Blog from "../Componenets/Blog/Blog";
import DetailsPage from "../Componenets/DetailsPage/DetailsPage";
import Home from "../Componenets/Home/Home";
import Main from "../Componenets/Main/Main";
import MyReview from "../Componenets/MyReview/MyReview";
import Navbar from "../Componenets/Navbar/Navbar";
import FilterReview from "../Componenets/PeopleReviews/FilterReview";
import ServiceAdd from "../Componenets/Services/ServiceAdd";
import Services from "../Componenets/Services/Services";
import Update from "../Componenets/Update/Update";
import WriteReview from "../Componenets/WriteReview/WriteReview";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Terms from "../Login/Register/Terms";
import PrivetRoutes from "./PrivetRoutes";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/detailsPage/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => fetch(`https://b6-a11-service-review-server-side.vercel.app/services/${params.id}`)
      },
      {
        path: '/myreview',
        element: <PrivetRoutes><MyReview></MyReview></PrivetRoutes>
      },
      {
        path: '/writereview:id',
        element: <WriteReview></WriteReview>,
        loader: ({ params }) => fetch(`https://b6-a11-service-review-server-side.vercel.app/services/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://b6-a11-service-review-server-side.vercel.app/myreview/${params.id}`)
      },
      {
        path: '/serviceadd',
        element: <PrivetRoutes><ServiceAdd></ServiceAdd></PrivetRoutes>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      },
      {
        path: "*",
        element: (
          <div className=" vh-100 bg-light card m-5 pt-5 text-center text-warning ">
            {" "}
            <h1 className="mt-5 pt-5">This Content not Found <br /><span className="text-8xl text-red-500">404</span> </h1>
          </div>
        ),
      },



    ]
  }

])