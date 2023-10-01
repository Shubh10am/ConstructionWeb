import React from "react";
import img1 from "../images/client-logo-1.png";
import img2 from "../images/client-logo-2.png";
import img3 from "../images/client-logo-3.png";
import img4 from "../images/client-logo-4.png";
import img5 from "../images/client-logo-5.png";
import img6 from "../images/client-logo-6.png";

function ClientLogo() {
  return (
    <>
      <section class="logo-container">
        <div class="swiper logo-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide">
              <img src={img1} alt="" />
            </div>
            <div class="swiper-slide slide">
              <img src={img2} alt="" />
            </div>
            <div class="swiper-slide slide">
              <img src={img3} alt="" />
            </div>
            <div class="swiper-slide slide">
              <img src={img4} alt="" />
            </div>
            <div class="swiper-slide slide">
              <img src={img5} alt="" />
            </div>
            <div class="swiper-slide slide">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientLogo;
