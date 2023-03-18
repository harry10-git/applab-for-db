import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

import Header from "./Header";

function Ic()
{

    return <div>
        
      
        {/* <h1><span className="icon"> <FontAwesomeIcon icon={faCircleNodes} size="2xl" /></span></h1> */}
        <nav class="navbar">
    <div class="container">
      <div class="navbar-header">
        <p class="navbar-brand ic-heading" style={{color: "white"}}>
        <span className="icon"> <FontAwesomeIcon icon={faCircleNodes} size="2xl" /></span>
        Innovation Centre</p>
      </div>
        <ul class="nav navbar-nav navbar-right">

          <li id="home"><a href="/">HOME</a></li>
          <li id="about"><a href="/about">ABOUT US</a></li>
          <li id="contact"><a href="/contact">CONTACT US</a></li>
        </ul>
    </div>
  </nav>



        <div className="topDiv"></div>

        <h1 id="icheading"> INNOVATION CENTER</h1>

        

        


    </div>
}

export default Ic;