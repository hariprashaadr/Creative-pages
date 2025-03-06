import React from 'react'
import { AlignJustify } from 'lucide-react';
import pic from './Assert/homebg.webp'
import { Lightbulb } from 'lucide-react';
import { Camera } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Pizza } from 'lucide-react';
import wrk1 from './Assert/wrk1.jpg'
import Footer from './Footer';


export default function Home() {
    const handlechange = () => {

    }
    return (
        <div>
            <div className='home'>
                <img className='imghbg' src={pic}></img>
                <h1>We're creatives</h1>
            </div>
            <div className='home2'>
                <h2>From Zero to Hero</h2>
                <h4>Bone expands your possibilities</h4>
                <p>Sed lacus augue, congue vel dapibus at, convallis semper lorem. Etiam volutpat, est eget feugiat tristique, erat leo ullamcorper turpis, vel auctor nunc diam vitae urna. Aliquam quis lacus et augue bibendum tincidunt. Duis id cursus ex. Sed cursus tortor id vehicula finibus. Nulla in pharetra lacus. Nulla nec elit nec sem feugiat eleifend sed sed neque. Mauris consequat in purus id cursus. Nunc suscipit lacinia ante, sit amet pulvinar orci venenatis a.</p>
            </div>
            <hr></hr>
            <div className='home3'>
                <div className='div1'>
                    <div className='icon'>
                        <Lightbulb />
                    </div>
                    <div className='txt'>
                        <h3>Concept</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='div1'>
                    <div className='icon'>
                        <Camera />
                    </div>
                    <div className='txt'>
                        <h3>Photography</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='div1'>
                    <div className='icon'>
                        <Monitor />
                    </div>
                    <div className='txt'>
                        <h3>Design</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='div1'>
                    <div className='icon'>
                        <Pizza />
                    </div>
                    <div className='txt'>
                        <h3>Great food</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            {/* <hr></hr> */}
            <div className='home4'>
                <h1>A fantastic price</h1>
                <div className='lists'>
                    <div className='price1'>
                        <h2>Silver</h2>
                        <h2>$100</h2>
                        <h4>Basic support</h4>
                        <h4>Basic features</h4>
                        <h4>Basic documentation</h4>
                        <h5>10 Iterations</h5>
                        <h5>Basic Concept</h5>
                        <h5>10 Websites</h5>
                        <h5>1TB Bandwidth</h5>
                        <button onClick={handlechange}>View plan</button>
                    </div>
                    <div className='price2'>
                        <h2>Gold</h2>
                        <h2>$200</h2>
                        <h4>Premium support</h4>
                        <h4>Premium features</h4>
                        <h4>Premium documentation</h4>
                        <h5>125 Iterations</h5>
                        <h5>Premium Concept</h5>
                        <h5>25 Websites</h5>
                        <h5>2.5TB Bandwidth</h5>
                        <button onClick={handlechange}>View plan</button>
                    </div>
                    <div className='price3'>
                        <h2>Diamond</h2>
                        <h2>$350</h2>
                        <h4>Unlimited support</h4>
                        <h4>Unlimited features</h4>
                        <h4>Unlimited documentation</h4>
                        <h5>Unlimited Iterations</h5>
                        <h5>Unlimited Concept</h5>
                        <h5>Unlimited Websites</h5>
                        <h5>Unlimited Bandwidth</h5>
                        <button onClick={handlechange}>View plan</button>
                    </div>
                </div>
            </div>
            <div className='home5'>
                <h2>Work</h2>
                <div className='works'>
                    <div className='work1'>
                        
                    </div>
                    <div className='work2'>
                    </div>
                    <div className='work3'>
                        
                    </div>
                    <div className='work4'>
                        
                    </div>
                    <div className='work5'>
                        
                    </div>
                    <div className='work6'>
                       
                    </div>
                    <div className='work7'>
                        
                    </div>
                    <div className='work8'>
                        
                    </div>
                    <div className='work9'>
                       
                    </div>
                </div>
            </div>




<Footer/>
        </div>
    )
}
