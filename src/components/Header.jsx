import React from 'react'

function Header() {
  return (
    <header className="header">
    <nav className="nav container flex">
      <a href="index.html" className="logo-content flex">
        <img src="images/LOGO.svg" />
        {/*<span class="logo-text">DahVidh</span>*/}
      </a>
      <div className="menu-content">
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
        </ul>
        <div className="media-icons flex">
          <a href="https://www.facebook.com">
            <i className="bx bxl-facebook" />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <i className="bx bxl-twitter" />
          </a>
          <a href="https://www.instagram.com/accounts/login">
            <i className="bx bxl-instagram-alt" />
          </a>
          <a href="https://github.com/login">
            <i className="bx bxl-github" />
          </a>
          <a href="https://www.youtube.com/login">
            <i className="bx bxl-youtube" />
          </a>
        </div>
        <i className="bx bx-x navClose-btn" />
      </div>
      <div className="contact-content flex">
        <button className="button3" href="#">
          Login{" "}
        </button>
        <button className="button" href="#">
          Register{" "}
        </button>
      </div>
      <i className="bx bx-menu navOpen-btn" />
    </nav>
  </header>
  )
}

export default Header