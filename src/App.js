import "./styles.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Project from "./Components/Project";
import Review from "./Components/Review";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import ClientLogo from "./Components/ClientLogo";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Project />
      <Review />
      <Pricing />
      <Contact />
      <Blogs />
      <ClientLogo />
      <Footer />
    </>
  );
}
