import React from "react";

function Header() {
  let navbar = document.querySelector(".header .navbar");
  let searchForm = document.querySelector(".header .search-form");
  let loginForm = document.querySelector(".header .login-form");
  let contactInfo = document.querySelector(".contact-info");

  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
  };

  document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
  };

  document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
  };

  document.querySelector("#info-btn").onclick = () => {
    contactInfo.classList.add("active");
  };

  document.querySelector("#close-contact-info").onclick = () => {
    contactInfo.classList.remove("active");
  };

  window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    contactInfo.classList.remove("active");
  };

  return (
    <>
      <header class="header">
        <a href="/" class="logo">
          We<span>Build</span>
        </a>

        <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>

        <div class="icons">
          <div id="menu-btn" class="fas fa-bars"></div>
          <div id="info-btn" class="fas fa-info-circle"></div>
          <div id="search-btn" class="fas fa-search"></div>
          <div id="login-btn" class="fas fa-user"></div>
        </div>

        <form action="" class="search-form">
          <input
            type="search"
            name=""
            placeholder="search here..."
            id="search-box"
          />
          <label for="search-box" class="fas fa-search"></label>
        </form>

        <form action="" class="login-form">
          <h3>login form</h3>
          <input type="email" placeholder="enter your email" class="box" />
          <input
            type="password"
            placeholder="enter your password"
            class="box"
          />
          <div class="flex">
            <input type="checkbox" name="" id="remember-me" />
            <label for="remember-me">remember me</label>
            <a href="/">forgot password?</a>
          </div>
          <input type="submit" value="login now" class="btn" />
          <p>
            don't have an account <a href="/">create one!</a>
          </p>
        </form>
      </header>

      <div class="contact-info">
        <div id="close-contact-info" class="fas fa-times"></div>

        <div class="info">
          <i class="fas fa-phone"></i>
          <h3>phone number</h3>
          <p>+123-456-7890</p>
          <p>+111-222-3333</p>
        </div>

        <div class="info">
          <i class="fas fa-envelope"></i>
          <h3>email address</h3>
          <p>shaikhanas@gmail.com</p>
          <p>anasbhai@gmail.com</p>
        </div>

        <div class="info">
          <i class="fas fa-map-marker-alt"></i>
          <h3>office address</h3>
          <p>mumbai, india - 400104</p>
        </div>

        <div class="share">
          <a href="/" class="fab fa-facebook-f" />
          <a href="/" class="fab fa-twitter" />
          <a href="/" class="fab fa-instagram" />
          <a href="/" class="fab fa-linkedin" />
        </div>
      </div>
    </>
  );
}

export default Header;
