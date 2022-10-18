/** @jsx jsx */
import React, { memo, useState, useEffect }from 'react'
import { css, jsx } from '@emotion/core'
import './MobileNav.css'
import { Link } from 'react-router-dom';



function MobileNav({home, services, news, success, about, contact, signin}) {
   

  return (
    <div>
        <ul 
                    css={css`
                      margin-right: 20px;
                      font-size: 14px;
                    `} 
                    className="nav-menu1"
                >
                    <Link to='/' className="nav-links1">
                    <li css={css`color: ${home}`} className="nav-item1" >
                        
                            Home
                        
                    </li>
                    </Link>
                    <Link to="/services" className="nav-links1">
                    <li css={css`color: ${services}`} className="nav-item1">
                        
                            Services
                        
                    </li>
                    </Link>
                    <Link to='/news' className="nav-links1">
                    <li css={css`color: ${news}`} className="nav-item1" >
                        
                            News
                        
                    </li>
                    </Link>
                    <Link to="/success-stories" className="nav-links1">
                    <li css={css`color: ${success}`} className="nav-item1">
                        
                            Success Stories
                        
                    </li>
                    </Link>
                    <Link to="/about" className="nav-links1">
                    <li css={css`color: ${about}`} className="nav-item1">
                        
                            About Us
                        
                    </li>
                    </Link>
                    <Link to="/contact" className="nav-links1">
                    <li css={css`color: ${contact}`} className="nav-item1">
                        
                            Contact us
                        
                    </li>
                    </Link>
                    <Link to="/signin" className="nav-links1">
                    <li css={css`color: ${signin}`} className="nav-item1">
                        
                            Sign In
                        
                    </li>
                    </Link>
                    </ul>
    </div>
  );
}


export default MobileNav




