import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";





const TakeAssignment = () => {
              
    const{user}=useContext(AuthContext)
    const service=useLoaderData()
    const{title,mark,Description,created}=service
    const handleSubmit=e=>{
      
        e.preventDefault();

        //   if(user?.email===submit_email) return toast.error('Action not permitted')
           

        const form=e.target;
        const pdf=form.pdf.value;
        const textarea=form.text.value;
        const total_mark=mark;
        const submit_title=title;
        const submit_email=user?.email;
        const submit_name=user?.displayName
       
        const status="pending"

       const submitData={
        pdf,
        textarea,
        total_mark,
        submit_email,
        submit_name,
      
        status,
        submit_title,
        created,

       }
       console.log(submitData)

       fetch("http://localhost:5000/submit",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(submitData)
    })
    .then(res=>res.json())
    .then(data=>{
        
        console.log(data);
       if(data.insertedId){
        Swal.fire({
            title: 'success!',
            text: 'submitted successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
       }
        
    })
       

       
        
    }
   
            return (
                <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
             
                <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                  
                  <div>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                     {title}
                    </h1>
          
                    <p className='mt-2 text-lg text-gray-600 '>
                      {Description}
                    </p>
                    <p className='mt-6 text-sm font-bold text-gray-600 '>
                     created details
                    </p>
                    <div className='flex items-center gap-5'>
                      <div>
                        
                        <p className='mt-2 text-sm  text-gray-600 '>
                          Name: {created?.create_Name}
                        </p>
                        <p className='mt-2 text-sm  text-gray-600 '>
                          Email: {created?.email}
                        </p>
                      </div>
                      <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                        <img src={created?.create_Photo} alt='' />
                     </div>
                    </div>
                   
                  </div>
                </div>
                {/* Place A Bid Form */}
                <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                  
          
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">pdf</span>
                                    </label>
                                    <input className="input input-bordered"  type="text" name="pdf" src="
                https://online.publuu.com/503971/1131874" placeholder="link" id="" />
                                </div>

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">TextArea</span>
                                    </label>
                                    <textarea className="input input-bordered"  name="text" placeholder="text" id="" cols="15" rows="5"></textarea>
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

export default TakeAssignment;