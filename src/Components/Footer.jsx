import React from "react";

function Footer() {
  return (
    <>
      <section class="footer">
        <div class="links">
          <a class="btn" href="#home">
            home
          </a>
          <a class="btn" href="#about">
            about
          </a>
          <a class="btn" href="#services">
            services
          </a>
          <a class="btn" href="#projects">
            projects
          </a>
          <a class="btn" href="#pricing">
            pricing
          </a>
          <a class="btn" href="#contact">
            contact
          </a>
          <a class="btn" href="#blogs">
            blogs
          </a>
        </div>

        <div class="credit">
          {" "}
          created by <span>mr. Shubham Singh</span> | all rights reserved!{" "}
        </div>
      </section>
    </>
  );
}

export default Footer;
