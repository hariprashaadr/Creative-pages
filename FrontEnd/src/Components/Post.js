import React, { useState } from 'react'
import axios from 'axios'
import PostTable from './PostTable'
import pic from './Assert/postbg.jpg'



export default function Post() {
    const[proddata,setproddata]=useState({
        name:'',
        price:'',
        desc:'',
        img:''
    })
    const handlechange=(e)=>{
        setproddata({...proddata,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(proddata)
        axios.post(`http://localhost:3002/creative/Postdata`,proddata)
        .then(res=>{
            alert('product added sucessfully')
            console.log(res)
            setproddata({
                name:'',
                price:'',
                desc:'',
                img:''
            })
            console.log(res)

        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <div className='service1'>
                        <img className='imghbg' src={pic}></img>
                        <h1>Post Page</h1>
                    </div>
        <div className='form1'>
            
            <form1 onSubmit={handlesubmit}>
            <h1> 𝓝𝓮𝔀 𝓹𝓸𝓼𝓽 </h1>
            <label>product Name:</label><br></br>
            <input type='text'name='name' value={proddata.name} onChange={handlechange}/><br></br>
            <label>price:</label><br></br>
            <input type='number'name='price' value={proddata.price} onChange={handlechange}/><br></br>
            <label>describtion:</label><br></br>
            <textarea name='desc' value={proddata.desc} onChange={handlechange}/><br></br>
            <label>image:</label><br></br>
            <input type='text'name='img' value={proddata.img} onChange={handlechange}/><br></br>
            <button className='btn' type='submit'>submit</button>
            </form1>
        </div><br></br><br></br><br></br><br></br>
        <PostTable/>
    </div>
  )
}
