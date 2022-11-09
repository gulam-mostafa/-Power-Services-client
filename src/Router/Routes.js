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
import PrivetRoutes from "./PrivetRoutes";


 export  const routes = createBrowserRouter ([
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
              element:<Login></Login>,
             
            },
            {
              path: "/register",
              element: <Register></Register>,
             
            },
            {
              path: "/detailsPage/:id",
              element: <DetailsPage></DetailsPage>,
              loader: ({params}) => fetch(`http://192.168.1.101:5000/services/${params.id}`)
            },
            {
              path: '/myreview',
              element: <PrivetRoutes><MyReview></MyReview></PrivetRoutes>
              
            },
            {
              path: '/writereview:id',
              element: <WriteReview></WriteReview>,
              loader: ({params}) => fetch(`http://192.168.1.101:5000/services/${params.id}`)
            },
            {
              path: '/update/:id',
              element: <Update></Update>,
              loader: ({params}) => fetch(`http://192.168.1.101:5000/myreview/${params.id}`)
            },
            {
              path: '/serviceadd',
              element: <PrivetRoutes><ServiceAdd></ServiceAdd></PrivetRoutes>
            }
        
          
          
        ]
    }

 ])