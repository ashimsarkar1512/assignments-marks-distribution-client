import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

            const {user,logOut}=useContext(AuthContext)

            const navLinks=<>
             <li ><NavLink  className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl')} to='/'>Home</NavLink></li>
             <li ><NavLink  className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl')} to='/assignment'>Assignments</NavLink></li>
             <li ><NavLink  className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl')} to='/create'>Create assignments</NavLink></li>
             <li ><NavLink  className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl')} to='/pending'>pending assignments</NavLink></li>

               
              
            </>




            return (
                        <div className="navbar container mx-auto p-6 bg-base-100">
                         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
            navLinks
      }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
            navLinks
    }
    </ul>
  </div>
 <div className="navbar-end">
 
            
            { user?
               <div className="dropdown dropdown-end">
               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                 <div className="w-10 rounded-full">
                 <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
                 </div>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                 <li>Settings</li>
                 <li ><button onClick={logOut}>Logout</button></li>
               </ul>
             </div>
             :
             <Link to='/login'><button className=" px-4 py-2 rounded-md  border bg-white text-black">Login</button></Link>
           }
 
          </div>
</div>
                    </div>
            );
};

export default Navbar;