import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "../Pages/DashBoard";
import Marathons from "../Pages/Marathons";
import AddMarathons from "../Pages/AddMarathons";
import MyMarathonList from "../Pages/MyMarathonList";
import MyApplyList from "../Pages/MyApplyList";
import MarathonsDetails from "../Pages/MarathonsDetails";
import UpdateMyMarathon from "../Pages/UpdateMyMarathon";
import UpdateApply from "../Pages/UpdateApply";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,            
        },
        {
            path: '/login',
            element: <Login></Login>,            
        },
        {
            path: '/register',
            element: <Register></Register>,            
        },        
        {
            path: '/marathons',
            element: <PrivateRoute><Marathons></Marathons></PrivateRoute>,            
        },
        {
          path: '/marathons/:id',
          element: <PrivateRoute><MarathonsDetails></MarathonsDetails></PrivateRoute>,
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateMyMarathon></UpdateMyMarathon></PrivateRoute>,
        },
        {
          path: '/updateApply/:id',
          element: <PrivateRoute><UpdateApply></UpdateApply></PrivateRoute>,
        },        
        {
            path: '/dashboard',
            element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
            children: [
              {
                index: true,
                element: <PrivateRoute><AddMarathons></AddMarathons></PrivateRoute>,            
            },
              {
                path: 'addMarathons',
                element: <PrivateRoute><AddMarathons></AddMarathons></PrivateRoute>,            
            },
            {
                path: 'myMarathonList',
                element: <PrivateRoute><MyMarathonList></MyMarathonList></PrivateRoute>,            
            },
            
            {
                path: 'myApplyList',
                element: <PrivateRoute><MyApplyList></MyApplyList></PrivateRoute>,            
            },
            ]            
        },
      ]
    },
  ]);
  export default router