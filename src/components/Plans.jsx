import React from 'react'

function Plans() {
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
            {/*<button
              className="btn1"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>*/}
          </div>
          <div className="brand-image">
            <img src="images/2 (2).png" alt="" className="brand-img" />
            {/*<button
              className="btn1"
              href="#"
              style={{ justifyContent: "center", display: "flex" }}
            >
              See More{" "}
            </button>*/}
          </div>
          <div className="brand-image">
            <img src="images/3 (2).png" alt="" className="brand-img" />
             {/*<button
              className="btn1"
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

export default Plans