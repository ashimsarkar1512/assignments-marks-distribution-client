
import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import Swal from "sweetalert2";


const Assignments = () => {


  // const allAssignments=useLoaderData()
  const [allAssignments, setAllAssignment] = useState([])
  const [items, setItems] = useState()

  const [filter, setFilter] = useState('');
  console.log(filter);

  useEffect(() => {
    fetch(`https://assignments-mark-distribution-server.vercel.app/assignment?filter=${filter}`)
      .then(res => res.json())
      .then(data => setAllAssignment(data))
  },
    [filter])

  const handleDelete = (email) => {
    console.log('delete', email);


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

        fetch(`https://assignments-mark-distribution-server.vercel.app/assignment/${email}`, {
          method: 'DElETE'
        })
          .then(res => res.json())
          .then(data => {


            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingUsers = items.filter(user => user.email !== email)
              setItems(remainingUsers)
            }
          });



      }
    })
  }

  return (


    <div>


      <div className="form-control container mx-auto max-w-xl mb-6 mt-6">
        <label className="label">
          <span className="label-text">Difficulty</span>
        </label>
        <select onChange={e => {
          setFilter(e.target.value)
        }}
          value={filter}

          className="select select-bordered w-full " placeholder="difficulty"
          name="difficulty" id="" >

          <option disabled selected>Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>

        </select>
      </div>
      <div className=" container mx-auto px-6 grid lg:grid-cols-3 gap-5">



        {
          allAssignments?.map(item => <> <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <div className="flex gap-16">
                <p> Mark : {item.mark}</p>
                <p>Difficulty : {item.difficulty}</p>
              </div>
              <div className="card-actions justify-between">
                <button onClick={() => handleDelete(item.email)} className="btn bg-red-500 px-12">Delete</button>
                <Link to={`/update/${item._id}`}>
                  <button className="btn bg-green-500 px-12">Update</button>
                </Link>
              </div>
              <Link to={`/viewDetails/${item._id}`}> <button className="btn w-full bg-orange-400 ">view</button></Link>
            </div>
          </div>
          </>
          )
        }
      </div>
    </div>
  );
};

export default Assignments;