import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Assignments from "../Pages/Assignments/Assignments";
import Update from "../Pages/Update/Update";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import TakeAssignment from "../Pages/TakeAssignment/TakeAssignment";
import MyAttempted from "../Pages/MyAttempt/MyAttempted";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import GiveMark from "../Pages/GiveMark/GiveMark";

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
                          element:<Assignments></Assignments>,
                          loader:()=>fetch('http://localhost:5000/assignment')
                          
                        },
                        {
                          path:'/update/:id',
                          element:<Update></Update>,
                          loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
                        },
                        {
                          path:"/viewDetails/:id",
                          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                          loader:()=>fetch('http://localhost:5000/assignment')
                        },
                        {
                          path:'/takeAssignment/:id',
                          element:<TakeAssignment></TakeAssignment>,
                          loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
                        },
                        {
                          path:'/myAttempted',
                          element:<PrivateRoute><MyAttempted></MyAttempted></PrivateRoute>
                        },
                        {
                          path:'/pending',
                          element:<PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>
                        },
                        {
                          path:'/giveMark/:email',
                          element:<PrivateRoute><GiveMark></GiveMark></PrivateRoute>
                        }

              ]
            },
          ]);
          
export default router          