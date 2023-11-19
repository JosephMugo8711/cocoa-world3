import React from 'react'

function Welcome() {
  return (
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
  )
}

export default Welcome