import React from "react";
import img1 from "../images/service-1.png";
import img2 from "../images/service-2.png";
import img3 from "../images/service-3.png";
import img4 from "../images/service-4.png";
import img5 from "../images/service-5.png";
import img6 from "../images/service-6.png";
import img7 from "../images/service-7.png";
import img8 from "../images/service-8.png";

function Service() {
  return (
    <>
      <section class="services" id="services">
        <h1 class="heading"> our services </h1>

        <div class="box-container">
          <div class="box">
            <img src={img1} alt="" />
            <h3>building construction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div class="box">
            <img src={img2} alt="" />
            <h3>house renovation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div class="box">
            <img src={img3} alt="" />
            <h3>architechture design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div class="box">
            <img src={img4} alt="" />
            <h3>material supply</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div class="box">
            <img src={img5} alt="" />
            <h3>construction consultant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div class="box">
            <img src={img6} alt="" />
            <h3>interior design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div class="box">
            <img src={img7} alt="" />
            <h3>building maintenance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div class="box">
            <img src={img8} alt="" />
            <h3>building renovation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
