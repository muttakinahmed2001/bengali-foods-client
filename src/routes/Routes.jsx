import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayout from "../layouts/ChefLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
 
 
 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
     {
        path: 'chefs',
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: ':id',
                element:<ChefDetails></ChefDetails>,
                loader: ({params}) => fetch (`https://assignment-10-server-muttakinahmed2001.vercel.app/chefs/${params.id}`)
                
            }

        ]
    }
])
export default router;