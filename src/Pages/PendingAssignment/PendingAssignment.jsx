import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const PendingAssignment = () => {

            const {user}=useContext(AuthContext)
        const[pending,setPending]=useState([]);

        fetch(`https://assignments-mark-distribution-server.vercel.app/pending/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
                setPending(data)
        })

            return (
                        <div className="mx-auto max-w-5xl my-10 mb-20">
                        <div className="overflow-x-auto">
        <table className="table ">
        {/* head */}
        <thead>
        <tr className="text-xl">
        
        <th>Title</th>
        <th>Mark</th>
        <th>examinee name</th>
        <th>button</th>
        
        
        </tr>
        </thead>
        <tbody>
        {/* row 1 */}
        {
                pending.map(item=><tr key={item._id} >
        
                        <td>{item.submit_title}</td>
                        <td>{item.total_mark}</td>
                        <td>{item.submit_name}</td>
                          <Link to={`/giveMark/${item.submit_email}`}><td><button>Give Mark</button></td></Link>                        
                        
                        
                        </tr>)
        }
        
        
        </tbody>
        </table>
        </div>          
                </div>
            );
};

export default PendingAssignment;