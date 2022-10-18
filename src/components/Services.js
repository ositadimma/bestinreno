/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import homeImage1 from '../img/home.jpg'
import t1 from '../img/banner.jpg'
import t4 from '../img/service1.jpg'
import t2 from '../img/service2.jpg'
import t3 from '../img/service3.jpg'
import i1 from '../img/i1.jpg';
import i2 from '../img/i2.jpg';
import i3 from'../img/i3.jpg'
import i4 from '../img/i4.jpg';
import i5 from '../img/i5.jpg';
import i6 from'../img/i6.jpg'
import Slider from './Slider'
import './Services.css'




function Services() {

    var images= [
        [i1,
         i4,
         'Amazing team! smiling, always nice to talk with, they always have the best advices for you, adapted to your needs!',
         'Jane Doe',
         'Customer, requested a space to fit her social life.'
        ],
        [i2,
         i5,
         'From start to finish, they were extremely professional, friendly, helpful and easy to do business with. Very happy with the experience and the company.',
          'John Doe', 
          'Customer need to stop roof from leaking.'
        ]
         ,[i3,
           i6,
         'Positive energy, great team spirit, hard workers and awesome people! I warmly recommend them!' ,
         'Iris Doe',
         'Customer, desired a bright open space.'
         ]
       ]

  return (
    <div>
        <div className='serviceHeader'>Services</div>
       <div className='serviceHeaderBg'>
           <div className='serviceHeaderCover'></div>
           <img src={t1}/>
       </div>
       <div css={
              css`
              background-color: #017e34;
              margin: 0 auto;
              width: 100vw
              text-align: center;
              padding-top: 20px;
              padding-bottom: 50px;
              `
              }>
         <div className='serviceQualitiesContainer'>
          <div className='serviceQual1'>
            <img className='serviceQualImg1' src={t4}>
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
              >Waste no time in viewing this truly stunning property. The property's surroundings really set it apart, offering idyllic sea views overlooking a park. </div>
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
          <div className='serviceQual2'>
            <img className='serviceQualImg2' src={t2}>
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
                `}>The house is surrounded by garden terraces that create unique spaces and an intimate ambience. With no overlooking neighbours. </div>
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
          <div className='serviceQual3'>
            <img className='serviceQualImg3' src={t3}>
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
         <Slider slides={images}  autoPlay={5} />
         <div css={css`
            font-size: 40px;
            text-align: center;
            margin-top: 30px;
         `}>Our References</div>
          <div css={css`
            font-size: 20px;
            text-align: center;
            margin-bottom: 50px;
         `}>We are in good company</div>
         <div css={css`
            display: flex
         `}>
             <img src='bestinreno.ca/web/image/website.s_reference_demo_image_1'></img>
             <img src='bestinreno.ca/web/image/website.s_reference_demo_image_2'></img>
             <img src='bestinreno.ca/web/image/website.s_reference_demo_image_3'></img>
             <img src='bestinreno.ca/web/image/website.s_reference_demo_image_4'></img>
             <img src='bestinreno.ca/web/image/website.s_reference_demo_image_5'></img>
             <img src='bestinreno.ca/web/image/website.s_reference_default_image_6'></img>
         </div>
    </div>
  );
}


export default Services


