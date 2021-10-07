import React from "react";
import "./Explore.css";
import hotel from "../media/Hotel.jpg";
import restaurant from "../media/restaurant.jpg";
function Explore() {
  return (
    <div className="explore-sctn">
      <div className="explore-container">
        <div className="row center-lg center-xs">
          <div className="col-xs-12 col-lg-4">
            <div className="card-hotel simple is-inview">
              <div className="hotel-img">
                <img src={hotel} alt="explore-reataurant" />
              </div>
              <div className="hotel-caption">
                <h2>HOTELS</h2>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-3">
            <div className="sep-haut simple is-inview"></div>
            <div className="title-caption anim-bloc is-inview">
              <h2>EXPLORE</h2>
            </div>
            <div className="sep-bas simple is-inview"></div>
          </div>
          <div className="col-xs-12 col-lg-4">
            <div className="card-restaurant simple is-inview">
              <div className="restaurant-img">
                <img src={restaurant} alt="explore-reataurant" />
              </div>
              <div className="restaurant-caption">
                <h2>RESTAURANTS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
