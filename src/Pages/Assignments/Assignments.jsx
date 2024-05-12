import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Assignments = () => {
       const allAssignments=useLoaderData()
       const [items,setItems]=useState(allAssignments)

       const handleDelete=(email)=>{
              console.log('delete',email);


              Swal.fire({
                     title: "Are you sure?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!"
                   }).then((result) => {
                     if (result.isConfirmed) {

              fetch(`http://localhost:5000/assignment/${email}`,{
                     method:'DElETE'
              })
              .then(res=>res.json())
              .then(data=>{
                     if(data.deletedCount>0){
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            });
                    }
                  });
                        
    
                                        const remainingUsers=items.filter(user=>user.email!==email)
                                        setItems(remainingUsers)
                            }
                        })
                }
       
            return (
                        <div className="mt-10 container mx-auto px-6 grid lg:grid-cols-3 gap-5">
                                
                               {
                    allAssignments.map(item => <> <div className="card bg-base-100 shadow-xl">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <div className="flex gap-16">
                            <p> Mark : {item.mark}</p>
                            <p>Difficulty : {item.difficulty}</p>
                      </div>
                      <div className="card-actions justify-between">
                        <button onClick={()=>handleDelete(item.email)} className="btn bg-red-500 px-8">Delete</button>
                       <Link to={`/update/${item._id}`}>
                       <button className="btn bg-green-500 px-8">Update</button>
                       </Link>
                      </div>
                      <button className="btn bg-orange-400 ">view</button>
                    </div>
                  </div>
                       </>
                    )
                }
                        </div>
            );
};

export default Assignments;