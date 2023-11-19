import React from 'react'

function Services() {
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
        Our Services
      </h2>
      <div className="brand-images">
        <div className="brand-image">
          <img src="images/Cocoa sourcing.png" alt="" className="brand-img" />
           {/*<button className="button2" href="#">
            See More
      </button>*/}
        </div>
        <div className="brand-image">
          <img
            src="images/Quality Assurance.png"
            alt=""
            className="brand-img"
          />
          {/*<button className="button2" href="#">
            See More
      </button>*/}
        </div>
        <div className="brand-image">
          <img
            src="images/Market Insights.png"
            alt=""
            className="brand-img"
          />
          {/*<button className="button2" href="#">
            See More
      </button>*/}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services