import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';


<i class="faSolid faCircleNodes"></i>

function Header()
{
    return <div>

<nav class="navbar navbar-default navColor">
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

    </div>
}

export default Header;