/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {Layout} from 'antd'
import {LinkedinFilled, TwitterSquareFilled} from '@ant-design/icons'
import {FacebookFilled} from '@ant-design/icons'

import facebook from '../img/facebook.png'



function Footer() {
    /*#B39000;
    #efc000;*/

  return (
    <div
    css={css`
    font-size: 18px;
`}
    >
       <div className='footerWrapper' >
        <div className='links' >
            
            <ul css={css`
                list-style: none;
                color: #ffd93d;
                `}>
                    <div  css={css`
                color: white;
                margin-bottom: 20px; 
                `}>Useful Links</div>
                <li>Home</li>
                <li>About us</li>
                <li>Products</li>
                <li>Services</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className='aboutUs' >
            <div>About us</div>
            <p>
                We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
            </p>
            <p>
                Our products are designed for small to medium size companies willing to optimize their performance.
            </p>
        </div>
        <div className='connect'>
            <ul css={css`
                list-style: none;
                color: #ffd93d;
                `}>
                    <div  css={css`
                color: white;
                `}>Connect with us</div>
                <li css={css`
                display: flex;
                margin-top: 20px;
                `}><div css={css`
                color: white;
                margin-right: 5px;
                `}><i class="fas fa-comment"></i></div>Contact us</li>
                <li css={css`
                display: flex;
                margin-top: 5px;
                `}><div css={css`
                color: white;
                margin-right: 5px;
                `}><i class="fas fa-envelope"></i></div>info@bestinreno.ca</li>
                <li css={css`
                display: flex;
                margin-top: 5px;
                `}><div css={css`
                color: white;
                margin-right: 5px;
                `}><i class="fas fa-phone"></i></div>+1 (416)-951-2073</li>
            </ul>
            <div className='logosContainer'>
                <div css={css`
                display: flex;`}>
                    <div css={css`
                    height: 35px;
                    width: 50px;
                    background: white;
                    border-radius: 50%;
                    justify-content: center;
                    text-align: center;
                    padding-top: 15px;
                    color: #1877f2;
                    `}><TwitterSquareFilled style={{ fontSize: 20}}/></div>
                    <div css={css`
                    height: 35px;
                    width: 50px;
                    background: white;
                    border-radius: 50%;
                    justify-content: center;
                    text-align: center;
                    padding-top: 15px;
                    color: rgb(29, 155, 240);
                    margin-left: 5px;
                    `}><FacebookFilled style={{ fontSize: 20}}/></div>
                    <div css={css`
                    height: 35px;
                    width: 50px;
                    background: white;
                    border-radius: 50%;
                    justify-content: center;
                    text-align: center;
                    padding-top: 15px;
                    color: #0a66c2;
                    margin-left: 5px;
                    `}><LinkedinFilled style={{ fontSize: 20}}/></div>
                </div>
                <div css={css`
                    height: 35px;
                    width: 50px;
                    background: white;
                    border-radius: 50%;
                    justify-content: center;
                    text-align: center;
                    padding-top: 15px;
                    color: #595959;
                    `}><FontAwesomeIcon icon={faHome}/></div>
            </div>
        </div>
        </div>
        <div css={css`
            color: #fafafa;
            background: #a38300;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 100px;
        `}>copyright &copy; bestinreno</div>
    </div>
  );
}


export default Footer




