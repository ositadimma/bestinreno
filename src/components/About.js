/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import homeImage1 from '../img/home.jpg'
import t1 from '../img/banner.jpg'
import home2 from '../img/home2.jpg'
import home3 from '../img/home3.jpg'
import  './About.css'





function About() {


  return (
    <div>
        <div className='aboutHeader' >About Us</div>
       <div className='aboutBg'>
           <div className='aboutBgCover' ></div>
           <img src={t1}/>
       </div>
         <div className='firstFlex' >
             <div className='aboutContainer1'>
                 <h3>Best in reno</h3>
                 <p>We are family operated renovation company. we strive to give top quality and efficient timing to satisfy or customers from in and around the Greeter Toronto Area including but not limited to Peel Region, Durham Region, York Region, Richmond hill, The City of Toronto, Halton Region and more.</p>
                 <button
                    css={
                    css`
                    background-color: #efc000;
                    color: black;
                    border:1px solid #efc000;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 15px;
                    padding-right: 15px;
                    font-size: 16px;
                    cursor: pointer;
                    margin-top: -5px;
                    `
                    }
                    >
                    Learn more
                    </button>
             </div>
             <div className='aboutImgContainer1'>
                 <img className='img1' src={home2}></img>
             </div>
         </div>
         <div className='secondFlex'>
            <div className='aboutImgContainer2'>
                 <img className='img2' src={home3}></img>
             </div>
             <div className='aboutContainer2'>
                 <h3>Bored with your interior?</h3>
                 <p>Our decoration experts are at your disposal to guide you step by step in the design of your interior and will give you the best advice for your interior design.</p>
                 <p>Discover our tailor-made services to embellish the decoration of your home.</p>
                 <button
                    css={
                    css`
                    background-color: #efc000;
                    color: black;
                    border:1px solid #efc000;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 15px;
                    padding-right: 15px;
                    font-size: 16px;
                    cursor: pointer;
                    margin-top: -5px;
                    `
                    }
                    >
                    Explore our services
                    </button>
             </div>
             
         </div>
    </div>
  );
}


export default About


