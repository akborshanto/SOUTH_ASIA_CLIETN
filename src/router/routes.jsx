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
import PrivateRoute from "../protectedRoute/PrivateRoute";
import ViewDetail from "../component/viewDetail/ViewDetail";
import UpdateSpot from "../protectedRoute/updateSpot/UpdateSpot";
import Bangladesh from "../pages/SUBCATEGORY/Bangladesh/Bangladesh";
import Malaysia from "../pages/SUBCATEGORY/MALAYSIA/Malaysia";
import Thiland from "../pages/SUBCATEGORY/THILAND/Thiland";
import Indonesia from "../Indonesia";
import Vietnam from "../pages/SUBCATEGORY/Vietnam/Vietnam";
import Cambodia from "../pages/SUBCATEGORY/Cambodia/Cambodia";

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
element:<AllTourist></AllTourist>,
loader:()=>fetch('http://localhost:5000/allSpot')
},

{
    path:'/TouristsSpotst',
    element:<PrivateRoute><AddTouristsSpot>   </AddTouristsSpot></PrivateRoute>

 
},
{
    path:'/myList',
    element:<PrivateRoute><MyList></MyList></PrivateRoute>,
   // loader:()=>fetch('http://localhost:5000/addSpot')
},
{
path:"/login",
element:<Login></Login>
},
{
  path:"/register",
  element:<Regester></Regester>
},

{
  path:'/viewDetail/:id',
  element:<PrivateRoute>
  <ViewDetail></ViewDetail>
  </PrivateRoute>
  ,//loader:({params})=>fetch(`http://localhost:5000/allSpot/${params.id}`)
},{
  path:"/updateSpot/:id",
  element:<PrivateRoute>
  
  <UpdateSpot></UpdateSpot>
  </PrivateRoute>,
  loader:({params})=>fetch(`http://localhost:5000/addSpot/${params.id}`)
},

/* ============subcategory */
{
  element:'/bangaldesh',
  element:<Bangladesh></Bangladesh>

},
{
  element:'/malaysia',
  element:<Malaysia></Malaysia>

},
{
  element:'/thiland',
  element:<Thiland></Thiland>

},
{
  element:'/indonesia',
  element:<Indonesia></Indonesia>

},
{
  element:'/vietnam',
  element:<Vietnam></Vietnam>

},
{
  element:'/cambodia',
  element:<Cambodia></Cambodia>

},



      ]
    },
  ]);
  