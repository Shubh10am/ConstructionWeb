import React from "react";
import img1 from "../images/pic-1.png";
import img2 from "../images/pic-2.png";
import img3 from "../images/pic-3.png";
import img4 from "../images/pic-4.png";
import img5 from "../images/pic-5.png";
import img6 from "../images/pic-6.png";

function Review() {
  return (
    <>
      <section class="reviews">
        <h1 class="heading"> clients reviews </h1>

        <div class="swiper reviews-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div class="user">
                <img src={img1} alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div class="user">
                <img src={img2} alt="" />
                <div class="info">
                  <h3>john1 deo</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div class="user">
                <img src={img3} alt="" />
                <div class="info">
                  <h3>john2 deo</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div class="user">
                <img src={img4} alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div class="user">
                <img src={img5} alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div class="user">
                <img src={img6} alt="" />
                <div class="info">
                  <h3>john deo</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
