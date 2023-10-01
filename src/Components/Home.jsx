import React from "react";
import img1 from "../images/home-slide-1.jpg";
import img2 from "../images/home-slide-2.jpg";
import img3 from "../images/home-slide-3.jpg";

function Home() {
  //   var swiper = new Swiper(".home-slider", {
  //     loop:true,
  //     grabCursor:true,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //  });

  //  var swiper = new Swiper(".reviews-slider", {
  //     loop:true,
  //     grabCursor:true,
  //     spaceBetween: 20,
  //     breakpoints: {
  //        640: {
  //          slidesPerView: 1,
  //        },
  //        768: {
  //          slidesPerView: 2,
  //        },
  //        991: {
  //          slidesPerView: 3,
  //        },
  //     },
  //  });

  //  var swiper = new Swiper(".blogs-slider", {
  //     loop:true,
  //     grabCursor:true,
  //     spaceBetween: 20,
  //     breakpoints: {
  //        640: {
  //          slidesPerView: 1,
  //        },
  //        768: {
  //          slidesPerView: 2,
  //        },
  //        991: {
  //          slidesPerView: 3,
  //        },
  //     },
  //  });

  //  var swiper = new Swiper(".logo-slider", {
  //     loop:true,
  //     grabCursor:true,
  //     spaceBetween: 20,
  //     breakpoints: {
  //        450: {
  //           slidesPerView: 2,
  //         },
  //        640: {
  //          slidesPerView: 3,
  //        },
  //        768: {
  //          slidesPerView: 4,
  //        },
  //        1000: {
  //          slidesPerView: 5,
  //        },
  //     },
  //  });

  return (
    <>
      <section class="home" id="home">
        <div class="swiper home-slider">
          <div class="swiper-wrapper">
            <section
              class="swiper-slide slide"
              style={{ background: `url(${img1}) no-repeat` }}
            >
              <div class="content">
                <h3>we provide best service</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur beatae iusto pariatur laborum magnam eos!
                </p>
                <a href="#about" class="btn">
                  get started
                </a>
              </div>
            </section>

            <section
              class="swiper-slide slide"
              style={{ background: `url(${img2}) no-repeat` }}
            >
              <div class="content">
                <h3>making dream come to life</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur beatae iusto pariatur laborum magnam eos!
                </p>
                <a href="#about" class="btn">
                  get started
                </a>
              </div>
            </section>

            <section
              class="swiper-slide slide"
              style={{ background: `url(${img3}) no-repeat` }}
            >
              <div class="content">
                <h3>from concept to creation</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur beatae iusto pariatur laborum magnam eos!
                </p>
                <a href="#about" class="btn">
                  get started
                </a>
              </div>
            </section>
          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
