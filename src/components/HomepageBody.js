/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import homeImage1 from '../img/home.jpg'
import home2 from '../img/home2.jpg'
import home3 from '../img/home3.jpg'
import './homepageBody.css'
import t1 from '../img/t1.jpg'
import t2 from '../img/t2.jpg'
import t3 from '../img/t3.jpg'
import t4 from '../img/example.jpg' 
import t5 from '../img/images.png'
import t6 from '../img/tag.png'
import t7 from '../img/cam.png'
import t8 from '../img/tick.png'
import svg from '../../newhome.svg'
import svg2 from '../../newhome2.svg'



function HomepageBody() {


  return (
    <div>
       <div
       css={css
        `
        height: 520px;
        width: 100%;
        overflow: hidden;
        `}
       >
       <div
            css={css
              `
              position: absolute;
              background-color: #00FF00;
              opacity: 0.3;
              -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
              height: 520px;
              width: 100%;
              overflow: hidden;
              `}
           >

           </div>
           <div className='bgText'>
             <div className='bgHeader'>
               Best In Reno.
             </div>
             <div className='bgContent'>
               Custom Design Carpentry, kitchen, Hardwood Specialist, Painting, Tiling, Basement renovation, and Pluming.
             </div>
                <button
                css={
                  css`
                   background-color: #efc000;
                   color: black;
                   border:1px solid #efc000;
                   padding: 10px;
                   font-size: 16px;
                   margin-top: 20px;
                   cursor: pointer
                  `
                }
                >
                  See properties
                </button>
           </div>
         <img className='homeImg0' src={homeImage1}>
           </img>
        </div> 
        <div
              css={css
                `
                margin-top: 30px;
                `
              }
        >
        <div className='first'>
          <div>
         <div className='firstDetail'>
           <h1 className='firstDetailHeader'>Are you thinking to renovate</h1>
           <p className='firstDetailContent'>
           Make an appointment for a free valuation of your property. We visit the property, advise you on a realistic asking price and we explain our way of working. 
           <br/>
           You can decide in all freedom whether or not you would like to work with us for the sale of your property. 
           </p>
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
              Contact Us
              </button>
         </div>
         </div>
         <div><img className='svg' src={svg}></img></div>
         </div>
         
         </div>
         <div className='secondContainer'>
         <div className='secondDetail'>
           <h1 className='secondDetailHeader'>Bored with your interior? </h1>
           <p className='secondDetailContent'>
            Our decoration experts are at your disposal to guide you step by step in the design of your interior and will give you the best advice for your interior design.           <br/>
           </p>
           <p className='secondDetailContent'>
           Discover our tailor-made services to embellish the decoration of your home. 
           </p>
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
         <div className='svg2Container'><img className='svg2' src={svg2}></img></div>
         <img className='homeImg3' src={home3}></img>
         
         </div>
         <div
            css={
              css`
              font-size: 30px;
              text-align: center;
              margin-top: 100px;
              `
              }
         >
           No Job Too Big! No Job Too Small!
         </div>
         <div className='samplesContainer'>
         <div className='samplesWrapper'>
         <div className='samples'>
          <div className='sample1'>
            <img className='sampleImg1' src={t1}>
            </img>
            <div
             css={css`
             text-align: left;
             color: black;
             margin: 10px;
             `}
            >
              <div css={
                css`
                color: #6C757D;
                font-size: 20px;
                font-weight: bold;
                `
                }>$295,000</div>
              <h5
                css={
                  css`
                  margin-top: 5px;
                  color: #18191A;
                  `
                  }
              >House On The Hill</h5>
              <div
              css={
                css`
                font-size: 18px;
                margin-top: -30px;
                color: #18191A;
                `}
              >Waste no time in viewing this truly stunning property. The property's surroundings really set it apart, offering idyllic sea views overlooking a park. Pyrgon and marble</div>
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
              margin-top: 15px;
              `
              }
              >
              View details
              </button>
            </div>

          </div>
          <div className='sample2'>
            <img className='sampleImg2' src={t2}>
            </img>
            <div
               css={css`
               text-align: left;
               color: black;
               margin: 10px;
               `}>
              <div css={
                css`
                color: #6C757D;
                font-size: 20px;
                font-weight: bold;
                `
                }>$1,295,000,000</div>
              <h5
               css={
                css`
                margin-top: 5px;
                color: #18191A;
                `
                }>Mountain View</h5>
              <div
               css={
                css`
                font-size: 18px;
                margin-top: -30px;
                color: #18191A;
                `}>The house is surrounded by garden terraces that create unique spaces and an intimate ambience. With no overlooking neighbours, the garden offers real privacy. </div>
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
              margin-top: 15px;
              `
              }
              >
              View details
              </button>
            </div>
          </div>
          <div className='sample3'>
            <img className='sampleImg3' src={t3}>
            </img>
            <div
              css={css`
              text-align: left;
              color: black;
              margin: 10px;
              `}
            >
              <div css={
                css`
                color: #6C757D;
                font-size: 20px;
                font-weight: bold;
                `
                }>$455,000</div>
              <h5 css={
                css`
                margin-top: 5px;
                color: #18191A;
                `
                }>Paradise Residence</h5>
              <div
               css={
                css`
                font-size: 18px;
                margin-top: -30px;
                color: #18191A;
                `}>Elegant, modern sophisticated architecture with an impressive in large scale home designed with the finest imported finishes. Pyrgon, marble and wood floors...</div>
              <button
              css={
              css`
              background-color: #efc000;
              color: #18191A;
              border:1px solid #efc000;
              padding-top: 10px;
              padding-bottom: 10px;
              padding-left: 15px;
              padding-right: 15px;
              font-size: 16px;
              cursor: pointer;
              margin-top: 15px;
              `
              }
              >
              View details
              </button>
            </div>
          </div>
          </div> 
          </div>
         </div>
         <h1 className='qualHeader'>
           We value our customers
         </h1>
         <div className='qualitiesWrapper'>
         <div className='qualitiesContainer'>
           <img className='qualitiesImg' src={t4}>
           </img>
            <div className='qualitiesText'>
              <div className='qual1' >
                <div className='qual1Content' >
                  <img css={
                    css`
                    height: 50px
                    `} src={t5}></img>
                  <h2>Increased Visibility</h2>
                  <p  css={
                      css`
                      font-size: 18px;
                      `}>Increase Visitor retention. Customer engagement on a website with virtual tour is 5 times longer compared to a site without it. </p>
                </div>
                <div className='qual2Content'>
                  <img css={
                    css`
                    height: 50px
                    `} src={t6}></img>
                    <h2>No fixed fees</h2>
                    <p  css={
                        css`
                        font-size: 18px;
                        `}>At Real Estate Agency we have fixed price fees. This means we only charge when your home sale is confirmed.</p>
                </div>
              </div>
              <div className='qual2'>
              <div className='qual3Content'>
                <img css={
                  css`
                  height: 50px
                  `} src={t7}></img>
                  <h2>Pro Photo Shoot</h2>
                  <p  css={
                      css`
                      font-size: 18px;
                      `}>They say an image is worth a thousand words and we know you know how important it is to have the best photography.</p>
              </div>
              <div className='qual4Content'>
                <img css={
                  css`
                  height: 50px
                  `} src={t8}></img>
                  <h2>Premium Quality</h2>
                  <p  css={
                      css`
                      font-size: 18px;
                      `}>We are committed to delivering high quality services that enhance your brand by allowing visitors to interact virtually.</p>
              </div>
            </div>
            </div>
          </div>
         </div>
         <div className='stats'>
             <div className='stat1'>
               <div css={
                    css`
                    text-align: center;
                    font-size: 50px;
                    `}>2000+</div>
                <div css={
                    css`
                    text-align: center;
                    font-size: 20px;
                    `}>properties already sold renovated.</div>
             </div>
             <div className='stat2'>
                <div css={
                    css`
                    text-align: center;
                    font-size: 50px;
                    `}>98%</div>
                <div  css={
                    css`
                    text-align: center;
                    font-size: 20px;
                    `}>happy customers</div>
             </div>
             <div className='stat3'>
               <div css={
                    css`
                    text-align: center;
                    font-size: 50px;
                    `}>142</div>
                <div css={
                    css`
                    text-align: center;
                    font-size: 20px;
                    `}>amazing agents</div>
             </div>
             <div className='stat4'>
               <div css={
                    css`
                    text-align: center;
                    font-size: 50px;
                    `}>100+</div>
                <div css={
                    css`
                    text-align: center;
                    font-size: 20px;
                    `}>offices</div>
             </div>
         </div>
    </div>
  );
}


export default HomepageBody


