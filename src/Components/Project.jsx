import React from "react";
import img1 from "../images/project-1.jpg";
import img2 from "../images/project-2.jpg";
import img3 from "../images/project-3.jpg";
import img4 from "../images/project-4.jpg";
import img5 from "../images/project-5.jpg";
import img6 from "../images/project-6.jpg";

function Project() {
  return (
    <>
      <section class="projects" id="projects">
        <h1 class="heading"> our projects </h1>

        <div class="box-container">
          <a href="images/project-1.jpg" class="box">
            <div class="image">
              <img src={img1} alt="" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-2.jpg" class="box">
            <div class="image">
              <img src={img2} alt="" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-3.jpg" class="box">
            <div class="image">
              <img src={img3} alt="" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-4.jpg" class="box">
            <div class="image">
              <img src={img4} alt="" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-5.jpg" class="box">
            <div class="image">
              <img src={img5} alt="" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-6.jpg" class="box">
            <div class="image">
              <img src={img6} alt="" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <i class="fas fa-plus"></i>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Project;
