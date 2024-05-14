import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
            const assignmentDetails=useLoaderData();
            console.log(assignmentDetails);

            const{id}=useParams();
            const [details, setDetails] = useState([]);

      useEffect(() => {
            const findDetails = assignmentDetails.find((item) => item. _id === id)
            setDetails(findDetails)
      }, [])


      const{title,mark,difficulty,date,_id}=details

            return (
                        <div className="mx-auto max-w-6xl my-10">
                                <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="text-xl">
       
        <th>Title</th>
        <th>Mark</th>
        <th>Difficulty</th>
        <th>Date</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     <tr >
           
            <td>{title}</td>
            <td>{mark}</td>
            <td>{difficulty}</td>
            <td>{date}</td>
           <Link to={`/takeAssignment/${_id}`}> <td><button  className="p-2 bg-green-500 rounded-md">Take assignment</button></td></Link>
           
          
          </tr>
     

    </tbody>
  </table>
</div>          
                        </div>
            );
};

export default ViewDetails;