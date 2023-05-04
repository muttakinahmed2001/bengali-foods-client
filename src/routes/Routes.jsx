import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayout from "../layouts/ChefLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                loader: ({params}) => fetch (`http://localhost:5000/chefs/${params.id}`)
                
            }

        ]
    }
])
export default router;