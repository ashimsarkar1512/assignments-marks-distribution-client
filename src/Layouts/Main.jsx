import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";



const Main = () => {
            return (
                        <div>
                               <div className="h-32">
                               <Navbar></Navbar>
                               </div>
                               <Outlet></Outlet>  
                               {/* <Footer></Footer>    */}
                        </div>
            );
};

export default Main;
