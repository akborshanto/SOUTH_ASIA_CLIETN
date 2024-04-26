import {
    createBrowserRouter,

  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Errors from './../Error/Error';
import Home from "../pages/home/Home";
import AllTourist from "../pages/allTourist/AllTourist";
import AddTouristsSpot from "../protectedRoute/Add Tourists Spot/AddTouristsSpot";
import MyList from "../protectedRoute/myList/MyList";
import Login from "../pages/login/Login";
import Regester from "../pages/Regester/Regester";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<Errors></Errors>,
      children:[
{path:'/',
element:<Home></Home>,
},
{path:'/allTourist',
element:<AllTourist></AllTourist>
},

{
    path:'/TouristsSpotst',
    element:<AddTouristsSpot></AddTouristsSpot>
},
{
    path:'/myList',
    element:<MyList></MyList>
},
{
path:"/login",
element:<Login></Login>
},
{
  path:"register",
  element:<Regester></Regester>
}

      ]
    },
  ]);
  