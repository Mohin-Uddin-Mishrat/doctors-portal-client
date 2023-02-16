import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import About from "../../pages/About/About";
import Appoinment from "../../pages/Appoinment/Appoinment";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyAppointment from "../../pages/Dashboard/MyAppointment";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login";
import Sighnup from "../../pages/Sighnup";
import PrivateRoute from '../PrivateRoute/PrivateRoute'


const router =createBrowserRouter([
    {path:'/', element:<Main></Main>, 
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/appoinment',
            element:<Appoinment></Appoinment>
        },
        
        {
            path:'/about',
            element:<About></About>
        },



        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element: <Sighnup></Sighnup>
        }
       
    ]

   },
   {
    
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
        {
            path:'/dashboard',
            element: <MyAppointment></MyAppointment>
        }
       ]
    
   }

])
export default router;