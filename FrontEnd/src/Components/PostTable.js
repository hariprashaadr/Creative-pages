import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Postupdateform from './Postupdateform'
export default function MobileTable() {
    const[list,setlist]=useState([])
    const[popup,setpopup]=useState()
    const[data,setdata]=useState()
    useEffect(()=>{
      axios.get(`http://localhost:3000/proddata`)
      .then(res=>setlist(res.data))
      .catch(err=>console.log(err))
    },[])
    const handleDel=(id)=>{
      axios.delete(`http://localhost:3000/proddata/${id}`)
      .then(res=>{
        console.log(res)
        alert('Deleted successfully')
      })
      .catch(err=>console.log(err))
    }
    const handleEdit=(data)=>{
      setpopup(true)
      setdata(data)
    }
  return (
    <div className='table'>
      <table>
        <thead border={1}>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map(x=>(
            <tr>
              <td>{x.name}</td>
              <td>{x.price}</td>
              <td>{x.desc}</td>
              <td><img src={x.img} width={100} height={100}/></td>
              <td>
                <button onClick={()=>handleEdit(x)}>Edit</button>
                <button onClick={()=>handleDel(x.id)}>Delet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {popup &&<Postupdateform  data={data} setpopup={setpopup}/>}
    </div>
  )
}
