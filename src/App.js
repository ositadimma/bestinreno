// import './App.css';
import Slider from './components/slider'
import images from './images';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Navbar from './components/Navbar';
import SliderBuffer from './SliderBuffer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomepageBody from './components/HomepageBody'
import Footer from './components/Footer'
import Services from './components/Services'
import News from './components/News'
import SuccessStories from './components/SuccessStories'
import About from './components/About'
import ContactUs from './components/ContactUs'
import SignIn from './components/SignIn'
import { css, jsx } from '@emotion/core'

function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
        <Route exact path='/'>
          <Navbar current='home'/>
          <HomepageBody/>
          <SliderBuffer/>
       </Route>
       <Route path='/services'>
          <Navbar current='services'/>
          <Services/>
       </Route>
       <Route path='/news'>
          <Navbar current='news'/>
          <News/>
       </Route>
      </Switch>
      <Route path='/success-stories'>
          <Navbar current='success'/>
          <SuccessStories/>
       </Route>
       <Route path='/about'>
          <Navbar current='about'/>
          <About/>
       </Route>
       <Route path='/contact'>
          <Navbar current='contact'/>
          <ContactUs/>
       </Route>
       <Route path='/signin'>
          <Navbar current='signin'/>
          <SignIn/>
       </Route>
      <Footer/>
    </div>
    </Router>
  );
}

const dropCss= css`
.dropdown-menu {
  background: red;
  width: 50px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
}

.dropdown-menu li {
  background: #1888ff;
  cursor: pointer;
}


.dropdown-menu.clicked {
  display: none;
}

.dropdown-link {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
  padding: 16px;
}
`

export default App;
