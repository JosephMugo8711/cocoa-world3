import React from 'react'
import 'boxicons'
import 'animate.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

function Footer() {
  return (
    <footer className="section footer">
      <div className="footer-container container">
        <div className="footer-content animate__animated animate__backInLeft animate__delay-5s">
          <a href="index.html" className="logo-content flex">
            <img src="images/LOGO.svg" />
          </a>
          <p className="content-description">
            Cocoa World's key services include cocoa
            <br />
            sourcing, quality assurance, logistics solutions and market
            insights. The platform
            <br /> is committed to fair pricing, eco-friendly farming practices
            and community development.
            <br />
            <br /> Additionally, Cocoa World provides valuabe market insights to
            help clients make informed decisions.
          </p>
        </div>
        <div className="footer-linkContent">
          <ul className="footer-links">
            <h4 className="footerLinks-title">Features</h4>
            <br />
            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Our Cocoa
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                How it Works
              </a>
            </li>
          </ul>
          <ul className="footer-links">
            <h4 className="footerLinks-title">Other Info</h4>
            <br />
            <li>
              <a href="#" className="footer-link">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
          </ul>
          <ul className="footer-links">
            <h4 className="footerLinks-title">Contact Us</h4>
            <br />
            <div className="footer-location flex">
            <FaLocationPin />
              <div className="location-text">123, Our address Street</div>
            </div>
            <div className="footer-location flex">
            <IoCallSharp />
              <div className="location-text">09041581989</div>
            </div>
            <span className="phone-number" />
          </ul>
        </div>
      </div>
      <div className="footer-copyRight">
        <p>Copyright © 2023 Cocoa World. All rights reserved. <br/>             
        <div className="icons">
          <a href="https://www.facebook.com">
          <FaFacebookF />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/accounts/login">
           <BsInstagram />
          </a>
          <a href="https://github.com/Dahvidh">
          <BsWhatsapp />
          </a>
        </div>
        </p>
       
      </div>
    </footer>
  )
}

export default Footer
