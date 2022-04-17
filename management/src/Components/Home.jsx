import axios from "axios";
import { useEffect, useState } from "react"


export const Home = ()=>{
   const [db,setdb]=useState([]);
   useEffect(()=>{
    axios.get("https://schooldata1.herokuapp.com/teachers").then((res)=>{
        setdb(res.data)
      }) 
   },[])

   const handledelete=(id)=>{
    axios.delete(`https://schooldata1.herokuapp.com/teachers/${id}`).then((res)=>{
        console.log(res)
      }) 

   }

   const handlesort = ()=>{
       axios.get("https://schooldata1.herokuapp.com/teachers").then((res)=>{
           setdb(res.data.sort((a,b)=>{
               return b.age-a.age;
           }))
       })
   }
    return (
        <div>
          <button>ADD TEACHERS</button><br></br>
          <h3>SORT BY AGE</h3>
          <button onClick={handlesort}>High To Low</button>
          <button>Low To High</button>
          <table>
              <thead>
                  <tr>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Gender</th>
                     <th>Delete</th>


                 </tr>
              </thead>
             <tbody>
                 {db.map((e)=><tr key={e.id}>
                   <td>{e.name}</td>
                   <td>{e.age}</td>
                   <td>{e.gender}</td> 
                   <td><button onClick={()=>handledelete(e.id)}>Delete</button></td> 

                 </tr>)}
             </tbody>
          </table>
        </div>
    )
}