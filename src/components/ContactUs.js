/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import homeImage1 from '../img/home.jpg'
import t1 from '../img/banner.jpg'

import './ContactUs.css'



function ContactUs() {
    /*#B39000;
    #efc000;*/

  return (
    <div
    css={css`
    font-size: 18px;
`}>
    <div className='contactHeader'>Contact us</div>
       <div css={
               css`
                height: 120px;
                width: 100%;
               overflow: hidden;
               z-index: 1;
               `
           }>
           <div className='contactHeaderBg'></div>
       </div>
       <div className='contactContainer'>
           <div className='contactInputWrapper'>
               <div>
               Contact us about anything related to our company or services.<br/>
               We'll do our best to get back to you as soon as possible.
               </div>
               <div className='contactMainInput'>
                   <div css={
                        css`
                            display: flex
                        `
                        }>
                       <label>Your Name *</label>
                       <input className='contactInput'/>
                   </div>
                   <div css={
                        css`
                            display: flex
                        `
                        }>
                       <label>Phone Number</label>
                       <input className='contactInput'/>
                   </div>
                   <div css={
                        css`
                            display: flex
                        `
                        }>
                       <label>Your Email *</label>
                       <input className='contactInput'/>
                   </div>
                   <div css={
                        css`
                            display: flex
                        `
                        }>
                       <label>Your Company</label>
                       <input className='contactInput'/>
                   </div>
                   <div css={
                        css`
                            display: flex
                        `
                        }>
                       <label>Subject *</label>
                       <input className='contactInput'/>
                   </div>
                   <div css={
                        css`
                            display: flex
                        `
                        }>
                       <label>Your Question</label>
                       <textarea className='myText' rows='3'/>
                   </div>
                   <button className='contactSubmit'>
                    Submit
                    </button>
               </div>
           </div>
           <div className='details'>
               <div><div>My Company</div></div>
               <div className='flex'><i class="fa fa-map-marker" aria-hidden="true"></i><div css={
                    css`
                    margin-left: 10px;
                    m
                    `
                    }>Chaussée de Namur 40</div></div>
               <div className='flex'><i class="fas fa-envelope"></i><div  css={
                    css`
                    margin-left: 10px
                    `
                    }><a className='brown' href='tel:+1 (416)-951-2073'>+1 (416)-951-2073</a></div></div>
               <div className='flex'><i class="fas fa-phone"></i><div   css={
                    css`
                    margin-left: 10px
                    `
                    }><a className='brown' href='info@bestinreno.ca'>info@bestinreno.ca</a></div></div>
           </div>
       </div>
    </div>
  );
}


export default ContactUs




