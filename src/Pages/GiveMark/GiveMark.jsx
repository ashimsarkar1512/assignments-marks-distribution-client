import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const GiveMark = () => {
            const {user}=useContext(AuthContext)
        const[pending,setPending]=useState([]);

        fetch(`http://localhost:5000/pending/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
                setPending(data)
        })

        console.log(pending)

            return (
                        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
             
                        <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                          
                          
                                {
                                 pending.map(item=><div key={item._id} >
                                    <iframe src={item.pdf} frameBorder="0"></iframe>
                                    <div>
                                    <p className="mt-4">Note</p>
                                    <p>{item.textarea}</p>
                                </div>
                                 </div>)
                                    
                                }
                                
                           
                          
                        </div>
                        {/* Place A Bid Form */}
                        <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                          
                  
                          <form >
                            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Mark</span>
                                            </label>
                                            <input className="input input-bordered"  type="text" name="mark"  placeholder="link" id="" />
                                        </div>
        
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Feedback</span>
                                            </label>
                                           <input className="input input-bordered" type="text" name="feedback" placeholder="Feedback" />
                                        </div>
                  
                             
                             
                            </div>
                  
                            <div className='flex justify-end mt-6'>
                            <input className="btn btn-primary btn-block" type="submit" value="submit" />
                                
                             
                            </div>
                          </form>
                        </section>
                      
                      </div>
            );
};

export default GiveMark;