import React from 'react'

function Cocoa() {
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
          Our Cocoa
        </h2>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/1 (1).png" alt="" className="brand-img" />
            {/*<button
              className="button2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>*/}
          </div>
          <div className="brand-image">
            <img src="images/2 (1).png" alt="" className="brand-img" />
            {/*<button
              className="button2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>*/}
          </div>
          <div className="brand-image">
            <img src="images/3 (1).png" alt="" className="brand-img" />
           {/*<button
              className="button2"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cocoa