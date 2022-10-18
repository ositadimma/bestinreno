/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import homeImage1 from '../img/home.jpg'
import t1 from '../img/t1.jpg'
import t2 from '../img/t2.jpg'
import t3 from '../img/t3.jpg'
import t4 from '../img/example.jpg' 
import t5 from '../img/images.png'
import t6 from '../img/tag.png'
import t7 from '../img/cam.png'
import t8 from '../img/tick.png'
import './SignIn.css'







function Footer() {
    /*#B39000;
    #efc000;*/

  return (
    <div
    css={css`
    font-size: 18px;
    justify-content: center;
    display: table;
    margin: 0 auto;
`}>
    <div css={css`
    width: 300px;
`}>
    <div className='elabel'>
    <label >Email</label>
    </div>
    <input className='email' placeholder='Email' autofocus="autofocus"/>
    </div>
    <div>
    <div className='plabel'>
    <label >Password</label>
    </div>
    <input className='password' css={css`
    width: 300px;
    height: 38px;
    font-size: 16px;
`} placeholder='Password'/>

    </div>
    <button className='login-btn'>Log In</button>
    </div>
  );
}


export default Footer




