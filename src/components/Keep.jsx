import React from 'react'

function Keep() {
  return (
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
        </div>
        <div className="brand-image">
          <img src="images/Blog 2.png" alt="" className="brand-img" />
        </div>
        <div className="brand-image">
          <img src="images/Blog 3.png" alt="" className="brand-img" />
        </div>
        <button
            className="btn2"
            href="#"
            style={{ display: "flex", top: "29%",
            left: "50%" }}
          >
            Read more{" "}
          </button>
      </div>
    </div>
  </section>
  )
}

export default Keep