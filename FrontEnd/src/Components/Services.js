import React from 'react'
import photo1 from './Assert/servicesbg.jpg'
import photo from './Assert/photo1.jpg'
import { Lightbulb } from 'lucide-react';
import { Camera } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Pizza } from 'lucide-react';
import { ChartNoAxesColumn } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Microscope } from 'lucide-react';
import { Coffee } from 'lucide-react';
import Footer from './Footer';




export default function Services() {
    return (
        <div>
            <div className='service1'>
                <img className='imghbg' src={photo1}></img>
                <h1>Services</h1>
            </div>
            <div className='service2'>
                <div className='cont'>
                    <div className='icon1'>
                        <Lightbulb />
                    </div>
                    <div className='txt'>
                        <h3>Concept</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='cont'>
                    <div className='icon1'>
                        <Camera />
                    </div>
                    <div className='txt1'>
                        <h3>Photography</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='cont'>
                    <div className='icon1'>
                        <Coffee />
                    </div>
                    <div className='txt1'>
                        <h3>Design</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='cont'>
                    <div className='icon1'>
                        <Mail />
                    </div>
                    <div className='txt1'>
                        <h3>Great food</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='cont'>
                    <div className='icon1'>
                        <ChartNoAxesColumn />
                    </div>
                    <div className='txt1'>
                        <h3>Concept</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='cont'>
                    <div className='icon1'>
                        <Microscope />
                    </div>
                    <div className='txt1'>
                        <h3>Photography</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='cont'>
                    <div className='icon1'>
                        <Monitor />
                    </div>
                    <div className='txt1'>
                        <h3>Design</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='cont'>
                    <div className='icon1'>
                        <Pizza />
                    </div>
                    <div className='txt1'>
                        <h3>Great food</h3>
                        <p>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='services3'>
                <div className='photo'>
                    <img src={photo}  width='650' height='700'alt='pic'/>
                </div>
                <div className='details'>
                    <h1>Our Skillset</h1>
                    <h2>hari</h2>
                    <h3>Web Designer</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."  Let me know if you’d like to tweak or add anything!</p>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
