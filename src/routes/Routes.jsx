import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayout from "../layouts/ChefLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";
 
 
 

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
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'*',
                element:<Error></Error>
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
                
            
            },
            
                
            {
                path:'*',
                element:<Error></Error>
            }
            

        ]
    }
])
export default router;