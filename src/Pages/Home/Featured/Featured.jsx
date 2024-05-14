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
                                    <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    <div className="mt-6 mb-2">
                                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                                                <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                                    </div>
                                    <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                        </div>)
                               }     
                        </div>
            );
};

export default Featured;