/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'
import SliderImage from '../img/ComponentTMP_0-image.png'
import quote from '../img/quote.jpg'
import './Slide.css'

const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-color: #f8f8f8;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-family: SegoeUI-Bold, Segoe UI;
      `}
    >
     <div
     css={css`
        position: absolute;
        display: flex;
        margin-top: 70px;
      `}>
       <div className='slideTextWrapper'>
        <i  class="fas fa-quote-left"></i>
       </div>
       <div className='slideText'>
          <div className='slideText1'>{content[2]}</div>
          
        <div className='customerDetail'>
        <div className='customerName'>
          <img css={css`
          height: 40px;
          width: 40px;
          border-radius: 50%;
          
        `} src={content[1]}></img>
        <div className='slideText2' >{content[3]} •</div>
        </div>
        <div className='slideText2' >{content[4]}</div>
        </div>
       </div>
     </div>
     <div  css={css`
            height: 400px;
            width: 100%;
            overflow: hidden
          `}>
        <img className='mainSlideImg' src={content[0]}></img>
      </div>
    </div>
  )
}

export default memo(Slide)
