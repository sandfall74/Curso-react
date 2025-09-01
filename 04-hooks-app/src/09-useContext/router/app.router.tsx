import { createBrowserRouter, Navigate } from "react-router";
import  { AboutPage } from "../pages/About/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage/>,
  },{
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage/>}/>,
  },{
    path: "/login",
    element: <LoginPage/>,
  },{
    path: "*",
    element: <Navigate to="/"/>,
  },
]);