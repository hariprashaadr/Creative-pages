import axios from 'axios'
import React, { useState } from 'react'

export default function Postupdateform({data,setpopup}) {
    const[proddata,setproddata]=useState({
        name:data.name,
        price:data.price,
        desc:data.desc,
        img:data.img
    })
    const handlechange=(e)=>{
        setproddata({...proddata,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        axios.put(`http://localhost:3000/proddata/${data.id}`,proddata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='popup'>
         
         <form onSubmit={handlesubmit}>
            
            <label>product Name:</label><br></br>
            <input type='text'name='name' value={proddata.name} onChange={handlechange}/><br></br>
            <label>price:</label><br></br>
            <input type='number'name='price' value={proddata.price} onChange={handlechange}/><br></br>
            <label>describtion:</label><br></br>
            <textarea name='desc' value={proddata.desc} onChange={handlechange}/><br></br>
            <label>image:</label><br></br>
            <input type='text'name='img' value={proddata.img} onChange={handlechange}/><br></br>
            <button type='submit'>submit</button>
            </form>

    </div>
  )
}
