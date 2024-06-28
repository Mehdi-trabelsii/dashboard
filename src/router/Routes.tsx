import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserDetail from "../components/UserDetail";

import UserDashboard from "../layout/UserDashborad";
//creating a router with react router
export const router = createBrowserRouter([{
    path:'/',
    element:<App />,
    children :[
        {path:'',element:<UserDashboard />},
        {path:'user/:id',element:<UserDetail />}
    ]
}])