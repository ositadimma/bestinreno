/** @jsx jsx */
import React, { memo, useState, useEffect }from 'react'
import { css, jsx } from '@emotion/core'
import Logo from '../img/logo.jpg'
import { Link } from 'react-router-dom';
import './Navbar.css'
import MobileNav from './MobileNav';



function Navbar({current}) {
    const [home, setHome] = useState('#949494');
    const [services, setServices] = useState('#949494');
    const [news, setNews] = useState('#949494');
    const [success, setSuccess] = useState('#949494');
    const [about, setAbout] = useState('#949494');
    const [contact, setContact] = useState('#949494');
    const [signin, setSignin] = useState('#949494');
    const [open, setOpen] = useState(false);
    
    

    useEffect(() => {
        if(current=='home'){
            setHome('#595959') 
        }else{
            setHome('#949494')  
        }
        if(current=='services'){
            setServices('#595959') 
        }else{
            setServices('#949494')  
        }
        if(current=='news'){
            setNews('#595959') 
        }else{
            setNews('#949494')  
        }
        if(current=='success'){
            setSuccess('#595959') 
        }else{
            setSuccess('#949494')  
        }
        if(current=='about'){
            setAbout('#595959') 
        }else{
            setAbout('#949494')  
        }
        if(current=='contact'){
            setContact('#595959') 
        }else{
            setContact('#949494')  
        }
        if(current=='signin'){
            setSignin('#595959') 
        }else{
            setSignin('#949494')  
        }
      }, [current]);


      const handleClick=()=>{
        setOpen(!open)
      }

      window.addEventListener('resize', ()=>{
        if(window.innerWidth>=960){
            if(open){
                setOpen(false)
            }
        }
      })


  return (
    <div>
    <nav 
        css={css`
          width: 100%;
          background-color: transparent; 
          display: flex;
          z-index: 2;
          `} 
        className="navbar"
    >
            <div css={ContainerCSS} className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img className='homeLogo' src={Logo}/>
                </a>
                <div className="navbar-container1">
                <ul 
                    css={css`
                      margin-right: 20px;
                      display: flex;
                      font-size: 14px;
                    `} 
                    className="nav-menu"
                >
                    <li css={ListCSS} className="nav-item2" >
                        <Link css={css`color: ${home}`}  to='/' className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li css={ListCSS}  className="nav-item">
                        <Link css={css`color: ${services}`} to="/services" className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li css={ListCSS}  className="nav-item" >
                        <Link css={css`color: ${news}`} className="nav-links" to='/news'>
                            News
                        </Link>
                    </li>
                    <li css={ListCSS}  className="nav-item">
                        <Link css={css`color: ${success}`} to="/success-stories" className="nav-links">
                            Success Stories
                        </Link>
                    </li>
                    <li css={ListCSS}  className="nav-item">
                        <Link css={css`color: ${about}`} to="/about" className="nav-links">
                            About Us
                        </Link>
                    </li>
                    <li css={ListCSS}  className="nav-item">
                        <Link css={css`color: ${contact}`} to="/contact" className="nav-links">
                            Contact us
                        </Link>
                    </li>
                    </ul>
                    <ul
                    css={css`
                        display: flex;
                        list-style: none;
                        margin-right: 130px
                    `}
                    >
                    <li css={ListButtonCSS}  className="nav-item">
                        <Link to="/signin" 
                        className="nav-links" 
                        css={
                            css`
                              text-decoration: none;
                              color: #7f7f7f;
                              font-weight: bold;
                              font-size: 16px;
                            `
                        }>
                         Sign in
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/contact'>
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
                    </Link>
                    </li>
                </ul>
                </div>
                <div className='mobNavIcon' onClick={handleClick}>
                    {!open && <div>
                        <div className='mobNavIconLine'></div>
                        <div className='mobNavIconLine'></div>
                        <div className='mobNavIconLine'></div>
                    </div>}
                    {open && <div className='closeNav' >
                        &times;
                    </div>}
                    
                </div>
            </div>
        </nav>
        {open &&   <MobileNav 
            home={home} 
            services={services} 
            news={news} 
            contact={contact}
            about={about}
            success={success}
            signin={signin}
        />}
      
        </div>
  );
}

const ContainerCSS = css`
    width: 100%;
    font-family: ArialMT, Arial;
    font-size: 13px;
    display: flex;
`

const ListCSS = css`
    list-style-type: none;
    margin-right: 30px;
    color: #595959;
    padding-top: 5px
`
const ListButtonCSS = css`
    list-style-type: none;
    margin-right: 10px;
    right: 10px;
    padding: 5px;
`

const UlCSS = css`
    float: right;
    margin-right: 10px;
    display: flex;
`

const NavCSS = css`
    width: 100vw;
    color: transparent;
    position: absolute;
`
const NavMenuCSS = css`
    float: right;
    margin-right: 20px;
    right: 20px;
    padding-right: 20px;
`

const aCSS = css`
    text-decoration: none;
    color: #949494;
    font-size: 16px;
    margin-top: 10px;
`

const nCSS = css`
li{
  list-style-type: none;
  margin-top: 5px;
  margin-right: 10px;
  right: 10px;
  padding: 5px;
}

a{
  text-decoration: none;
}


.navbar-container{
  width: 100vw;
  
}



ul{
  float: right;
  margin-right: 10px;
  display: flex;
}

.navbar{
  width: 100vw;
  background-color: #f8f8f8;
  position: absolute;
} 
`
const dropCss= css`
.dropdown-menu {
  background: red;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
}

.navbar-container{
    width: 100vw;
    font-family: ArialMT, Arial;
    font-size: 13px;
}

.dropdown-menu li {
  background: #1888ff;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: #5cabff;
}

.dropdown-menu.clicked {
  display: none;
}

.dropdown-link {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
}
`
export default Navbar


