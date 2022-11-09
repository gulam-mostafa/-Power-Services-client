import "./App.css";
import Helmet from "react-helmet";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";



// import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";

function App() {
  return (
    <div  className=" bg-base-100 ">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
