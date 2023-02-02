import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login";
import Sighnup from "../../pages/Sighnup";


const router =createBrowserRouter([
    {path:'/', element:<Main></Main>, 
    children:[
        {
            path:'/',
            element:<Home></Home>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element: <Sighnup></Sighnup>
        },
        {
            path:'/dashbord',
            element:<Dashboard></Dashboard>
        }
    ]
   }
])
export default router;