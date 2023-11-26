import React from 'react'
import 'animate.css';

function Clients() {
  return (
    <section className="section brand">
      <div className="brand-container container animate__animated animate__backInLeft animate__delay-5s">
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
  )
}

export default Clients
