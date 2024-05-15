import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyAttempted = () => {

        const {user}=useContext(AuthContext)
        const[attempted,setAttempted]=useState([]);

        fetch(`https://assignments-mark-distribution-server.vercel.app/mysubmit/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
                setAttempted(data)
        })

       
            return (
                <div className="mx-auto max-w-6xl my-10">
                <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead>
<tr className="text-xl">

<th>Title</th>
<th>Mark</th>
<th>Status</th>
<th>Obtain Mark</th>
<th>Feedback</th>

</tr>
</thead>
<tbody>
{/* row 1 */}
{
        attempted.map(item=><tr key={item._id} >

                <td>{item.submit_title}</td>
                <td>{item.total_mark}</td>
                <td>{item.status}</td>
                
                
                
                </tr>)
}


</tbody>
</table>
</div>          
        </div>
            );
};

export default MyAttempted;