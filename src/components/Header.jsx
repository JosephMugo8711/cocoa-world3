import React from 'react';
import 'animate.css';
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

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

          <MdClose />
        </div>

        <IoMenu />
      </nav>
    </header>
  );
}

export default Header;
