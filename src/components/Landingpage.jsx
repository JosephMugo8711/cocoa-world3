import React from 'react'
import '../App.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper/modules';
// Direct React component imports
//import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';

// Styles must use direct files imports
//import 'swiper/swiper.scss'; // core Swiper
//import 'swiper/modules/navigation.scss'; // Navigation module
//import 'swiper/modules/pagination.scss'; // Pagination module



function Landingpage() {
  return (
    <main>

    {/* Home Section */}
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-details">
          <div className="home-text">
            <h2 className="homeTitle">
              Discover the World <br />
              of Premium Cocoa.
            </h2>
            <h4 className="homeSubtitle">
              Streamline your Cocoa aquisition process with Trusted Suppliers
              across Africa.
            </h4>
          </div>
          <button className="button">Join the waitlist.</button>
        </div>
        <br />
        <div className="home-image">
          <img src="images/IMGs.svg" alt="" className="about-img" />
        </div>
      </div>
    </section>

    {/*What We Do Section*/}
    <section className="section brand">
      <div className="brand-container container">
        <h2
          style= 
          {{
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          Who We Are
        </h2>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/1.png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/2.png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/3.png" alt="" className="brand-img" />
          </div>
        </div>
      </div>
    </section>
    {/* Our services Section */}
    <section className="section brand">
      <div className="brand-container container">
        <h2
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          Our Services
        </h2>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/Cocoa sourcing.png" alt="" className="brand-img" />
            <button className="button2" href="#">
              See More
            </button>
          </div>
          <div className="brand-image">
            <img
              src="images/Quality Assurance.png"
              alt=""
              className="brand-img"
            />
            <button className="button2" href="#">
              See More
            </button>
          </div>
          <div className="brand-image">
            <img
              src="images/Market Insights.png"
              alt=""
              className="brand-img"
            />
            <button className="button2" href="#">
              See more
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Our Cocoa Section */}
    <section className="section brand">
      <div className="brand-container container">
        <h2
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          Our Cocoa
        </h2>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/1 (1).png" alt="" className="brand-img" />
            <button
              className="button2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>
          </div>
          <div className="brand-image">
            <img src="images/2 (1).png" alt="" className="brand-img" />
            <button
              className="button2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>
          </div>
          <div className="brand-image">
            <img src="images/3 (1).png" alt="" className="brand-img" />
            <button
              className="button2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See more{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* Plans Section */}
    <section className="section brand">
      <div className="brand-container container">
        <h2
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          Choose Your Plan
        </h2>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          To test the product for free{" "}
          <button className="button1" href="#">
            Click here
          </button>
        </p>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/1 (2).png" alt="" className="brand-img" />
            <button
              className="btn1"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>
          </div>
          <div className="brand-image">
            <img src="images/2 (2).png" alt="" className="brand-img" />
            <button
              className="btn1"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>
          </div>
          <div className="brand-image">
            <img src="images/3 (2).png" alt="" className="brand-img" />
            <button
              className="btn1"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See more{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* Clents Section */}
    <section className="section brand">
      <div className="brand-container container">
        <h2
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          We Care About our Custumers' Experience
        </h2>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/1 (3).png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/2 (3).png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/3 (3).png" alt="" className="brand-img" />
          </div>
        </div>
      </div>
    </section>
    {/* Keep up with us Section */}
    <section className="section brand">
      <div className="brand-container container">
        <h2
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}
        >
          Keep Up With Us
        </h2>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/Blog 1.png" alt="" className="brand-img" />
            <button
              className="btn2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              Read More{" "}
            </button>
          </div>
          <div className="brand-image">
            <img src="images/Blog 2.png" alt="" className="brand-img" />
            <button
              className="btn2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              Read More{" "}
            </button>
          </div>
          <div className="brand-image">
            <img src="images/Blog 3.png" alt="" className="brand-img" />
            <button
              className="btn2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              Read more{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  
  
    {/* Footer Section */}
    <footer className="section footer">
      <div className="footer-container container">
        <div className="footer-content">
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
              <i className="bx bx-map map-icon" />
              <div className="location-text">123, Our address Street</div>
            </div>
            <div className="footer-location flex">
              <i className="bx bx-phone phone-icon" />
              <div className="location-text">09041581989</div>
            </div>
            <span className="phone-number" />
          </ul>
        </div>
      </div>
      <div className="footer-copyRight">
        <p>Copyright © 2023 Cocoa World. All rigths reserved</p>
        <div className="icons">
          <a href="https://www.facebook.com">
            <i className="bx bxl-facebook" />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <i className="bx bxl-twitter" />
          </a>
          <a href="https://www.instagram.com/accounts/login">
            <i className="bx bxl-instagram-alt" />
          </a>
          <a href="https://github.com/Dahvidh">
            <i className="bx bxl-github" />
          </a>
        </div>
      </div>
    </footer>
    {/* Scroll Up */}
    <a href="#home" className="scrollUp-btn flex">
      <i className="bx bx-up-arrow-alt scrollUp-icon" />
    </a>
  </main>
  )
}

export default Landingpage