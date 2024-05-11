import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Assignments from "../Pages/Assignments/Assignments";

const router = createBrowserRouter([
            {
              path: "/",
              element: <Main></Main>,
              errorElement:<NotFound></NotFound>,
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
                                    path:'/register',
                                    element:<Register></Register>
                        },
                        {
                                    path:'/createAssignment',
                                    element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
                        },
                        {
                          path:'/assignment',
                          element:<Assignments></Assignments>
                        }
              ]
            },
          ]);
          
export default router          