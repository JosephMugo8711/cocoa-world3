import React from 'react';
import 'animate.css';
//import { BxFacebook, BxTwitter, BxInstagram, BxGithub, BxYoutube } from 'boxicons';

function Header() {
  return (
    <header className="header">
      <nav className="nav container flex animate__animated animate__backInLeft animate__delay-5s">
        <a href="index.html" className="logo-content flex">
          <img src="images/LOGO.svg" alt="" />
          {/*<span className="logo-text">DahVidh</span>*/}
        </a>
        <div className="menu-content ">
          <ul className="menu-list flex">
            <li>
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Our Cocoa
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>
            <li>
              <a className="button3" href="#">
                Login{" "}
              </a>
            </li>
            <li>
              <a className="button" href="#">
                Register{" "}
              </a>
            </li>
          </ul>
          <div className="media-icons flex">
            <a href="https://www.facebook.com">
              {/*<BxFacebook />*/} 
            </a>
            <a href="https://twitter.com/i/flow/login">
             {/*<BxTwitter/> */} 
            </a>
            <a href="https://www.instagram.com/accounts/login">
              {/* <BxInstagram />*/}
            </a>
            <a href="https://github.com/login">
             {/* <BxGithub />*/} 
            </a>
            <a href="https://www.youtube.com/login">
              {/*<BxYoutube/> */}
            </a>
          </div>
          <i className="bx bx-x navClose-btn" />
        </div>

        <i className="bx bx-menu navOpen-btn" />
      </nav>
    </header>
  );
}

export default Header;
