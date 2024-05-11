
import Swal from "sweetalert2";


const CreateAssignment = () => {

          const handleCreateAssignment=event=>{
            event.preventDefault();
            const form=event.target;
            const title=form.title.value;
            const mark=form.mark.value;
            const difficulty=form.difficulty.value;
            const date=form.date.value;
            const image=form.image.value;
            const Description=form.Description.value;

            const addAssignment={title,mark,difficulty,date,image,Description}
            console.log(addAssignment);


            fetch("http://localhost:5000/createAssignment",{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(addAssignment)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        
                        console.log(data);
                       if(data.insertedId){
                        Swal.fire({
                            title: 'success!',
                            text: 'art and craft added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                       }
                        
                    })
            
            
          }


            return (
 
                        <div className="container mx-auto px-16">
                        <h2 className='text-center text-3xl'>ghjg </h2>
                        <form onSubmit={handleCreateAssignment}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="Title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marks</span>
                                    </label>
                                    <input type="text" name="mark" placeholder="Marks" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Difficulty</span>
                                    </label>
                                      <select className="select select-bordered w-full " placeholder="difficulty" name="difficulty" id="">
                            
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                               
                            </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" />
                                </div>
                               
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input className="input input-bordered"  type="text" name="image" placeholder="Image-Url" id="" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className="input input-bordered"  name="Description" placeholder="Short Description" id="" cols="15" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary btn-block" type="submit" value="Created" />
                            </div>
                        </form>
                        <div className="card-body">
            
                        </div>
                    </div>     
            );
};

export default CreateAssignment;