
/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import './SuccessStories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';




function SuccessStories() {
    /*#B39000;
    #efc000;*/

  return (
    <div
    >
        <div className='successHeader'>Success Stories</div>
        <div className='successHeaderBg'>
            
        </div>
        <div className='successInputWrapper'>
        <div css={css`
            display: flex;
            margin-right: 150px;
            margin-top: 20px;
            width: 300px;
        `}><input className='successMainInput' placeholder='Search...'></input><button css={css`
            border: 1px #efc000 solid;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            width: 37px;
            height: 44px;
            margin-left: -35px;
            padding-top: 5px;
            padding-left: 5px;
            background-color: #efc000;
        `}><FontAwesomeIcon icon={faSearch}/></button></div></div>
        <div className='successContainer' >
            <div className='noSuccess' >No blog posts yet</div>
        </div>
    </div>
  );
}


export default SuccessStories;




