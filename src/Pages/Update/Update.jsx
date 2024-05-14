import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const Update = () => {
            const assignment=useLoaderData();
            const{title,mark,difficulty,image,Description,date,_id}=assignment

            const {user}=useContext(AuthContext)

            const handleUpdate=event=>{
              event.preventDefault();
              const form=event.target;
              const title=form.title.value;
              const mark=form.mark.value;
              const difficulty=form.difficulty.value;
              const date=form.date.value;
              const image=form.image.value;
              const Description=form.Description.value;
              const email=form.email.value;
  
              const updateAssignment={title,mark,difficulty,date,image,Description,email}
              console.log(updateAssignment);
  
  
              fetch(`http://localhost:5000/assignment/${_id}`,{
                          method:'PUT',
                          headers:{
                              'content-type':'application/json'
                          },
                          body:JSON.stringify(updateAssignment)
                      })
                      .then(res=>res.json())
                      .then(data=>{
                          
                          console.log(data);
                         if(data.modifiedCount>0){
                          Swal.fire({
                              title: 'success!',
                              text: 'update assignment successfully',
                              icon: 'success',
                              confirmButtonText: 'Cool'
                            })
                         }
                          
                      })
              
              
            }
  
  
            return (
                        <div className="container mx-auto px-16">
                        <h2 className='text-center text-3xl'>Update</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="Title" defaultValue={title} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marks</span>
                                    </label>
                                    <input type="text" name="mark" placeholder="Marks" defaultValue={mark} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Difficulty</span>
                                    </label>
                                      <select className="select select-bordered w-full " placeholder="difficulty" defaultValue={difficulty}   name="difficulty" id="">
                                      <option disabled selected>Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                               
                            </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" defaultValue={date} name="date" className="input input-bordered" />
                                </div>
                               
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input className="input input-bordered"  type="text" name="image" placeholder="Image-Url" defaultValue={image} id="" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input className="input input-bordered"  defaultValue={user?.email} type="email" name="email" placeholder="Email" id="" />
                                </div>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className="input input-bordered"  name="Description" defaultValue={Description} placeholder="Short Description" id="" cols="15" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary btn-block" type="submit" value="Update" />
                            </div>
                        </form>
                        <div className="card-body">
            
                        </div>
                    </div> 
            );
};

export default Update;