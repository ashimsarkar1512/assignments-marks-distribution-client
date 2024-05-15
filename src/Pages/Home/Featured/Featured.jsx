import { useEffect, useState } from "react";


const Featured = () => {
            const [featured, setFeatured]=useState([])
            

             useEffect(()=>{
                    fetch("http://localhost:5000/featured")
                    .then(res=>res.json())
                    .then(data=>{
                        setFeatured(data)
                    })
             },[])
            
            return (
                        <div className=" container mx-auto px-6 my-10 grid grid-cols-1 bg-gray-100 md:grid-cols-3 p-7 gap-6">
                               {
                                    featured.map(item=><div key={item._id} className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                                    <img src={item.thumbnailImageUrl} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    <div className="mt-6 mb-2 text-xl font-bold">
                                              <h2>{item.title}</h2>
                                    </div>
                                   <p>{item.description}</p>
                        </div>)
                               }     
                        </div>
            );
};

export default Featured;