import React from 'react'

function Whatwedo() {
  return (
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
  )
}

export default Whatwedo