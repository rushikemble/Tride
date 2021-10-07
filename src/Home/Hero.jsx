import React from "react";
import heroBg from "../media/hero-bg.png";
function Hero() {
  return (
    <div className="hero-wrapper" id="#Main">
      <div className="hero-text-container">
        <div className="overflow-hidden">
          <div className="heading-hero">
            <div className="show-on-load-1st">Start planning</div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="heading-hero">
            <div className="show-on-load-1st">your Dream</div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="heading-hero">
            <div className="show-on-load-1st">trip today</div>
          </div>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={heroBg} alt="heroImage" />
      </div>
    </div>
  );
}

export default Hero;
