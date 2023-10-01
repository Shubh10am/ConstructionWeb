import React from "react";
import img1 from "../images/blog-1.jpg";
import img2 from "../images/blog-2.jpg";
import img3 from "../images/blog-3.jpg";
import img4 from "../images/blog-4.jpg";
import img5 from "../images/blog-5.jpg";
import img6 from "../images/blog-6.jpg";

function Blogs() {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading"> our blogs </h1>

        <div class="swiper blogs-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide">
              <div class="image">
                <img src={img1} alt="" />
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="/" class="btn">
                  read more
                </a>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <img src={img2} alt="" />
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="/" class="btn">
                  read more
                </a>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <img src={img3} alt="" />
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="/" class="btn">
                  read more
                </a>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <img src={img4} alt="" />
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="/" class="btn">
                  read more
                </a>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <img src={img5} alt="" />
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="/" class="btn">
                  read more
                </a>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <img src={img6} alt="" />
              </div>
              <div class="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="/" class="btn">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
