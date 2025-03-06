import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import pic from './Assert/productbg.jpg'


export default function Product() {
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/proddata`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })

    return (
        <div className='cards'>
             <div className='prodbg'>
                    <img className='imghbg' src={pic}></img>
                    <h1>Product Page</h1>
                </div>
            <div className='grid-items'>
               
                <div className='overlay'>
                    <img src={'https://wallpaperaccess.com/full/143743.jpg'} width={550} height={600} />
                </div>
                <div className='overlay1'>
                    <h1>snazzy</h1>
                    <h2>$65</h2>
                    <p>lorem ipsum dolor sit amet</p>
                    <button className='btn' onClick={() => navigate(`/Post`)}>See Details</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
