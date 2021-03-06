import React from "react"
import { Link } from "gatsby"
//import TypedText from "./Typed-text"
import SocialLinks from "../../constants/socialLinks"
import HeroSlider from "./Slider"
import Bottom from "../Bottom/Bottom"
import "./hero.scss"

const Hero = () => {
  return (
    <header className="hero full-screen">
      <HeroSlider />
      <div className="text-center hero-content">
        <div className="col-lg-12">
          <div className="hero-content text-center">
            {/* <h1 className="dark-color mb-0">Hey, I'M Cristian</h1> */}
            <div className="typed-text">
              <h1 className="hero-title">
                <span className="base-color">Hey,</span> I'm Cristian
              </h1>
            </div>
            <p className="hero-desc mx-auto dark-color">
              A passionate Frontend web developer based in Warsaw that love
              implementing designs that inspire and attract people
            </p>
            <Link to="/projects/">
              <Bottom>View Projects</Bottom>
            </Link>
            <SocialLinks styleClass="social-links social-links__hero" />
          </div>
        </div>
      </div>
      <a className="scroll-down" href="#services">
        <span></span>
      </a>
      <div id="services" className="custom-shape-divider-bottom-1613768689">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  )
}

export default Hero
