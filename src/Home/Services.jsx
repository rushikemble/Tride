import React from "react";
import "./Explore.css";
import flight from "../media/Flight.jpg";
import attraction from "../media/Attraction.jpg";
import uniqueStays from "../media/unique-stays.jpg";
function Services() {
  return (
    <div className="container-fluid">
      <div className="row center-lg center-xs services-heading ">
        <div className="col-xs-12 col-lg-4  ">
          <h4 className="simple is-inview animated">Our Services</h4>
        </div>
      </div>
      <div className="row center-lg center-xs center-service-cards">
        <div className="col-xs-12  col-lg-4">
          <div className="card-service">
            <div className="service-img simple is-inview">
              <img src={attraction} alt="Attractions" />
            </div>
            <div className="service-caption courant is-inview ">
              <h2>Attractions</h2>
            </div>
          </div>
        </div>

        <div className="col-xs-12  col-lg-4">
          <div className="card-service">
            <div className="service-img simple is-inview">
              <img src={flight} alt="flight" />
            </div>
            <div className="service-caption courant is-inview">
              <h2>Flight</h2>
            </div>
          </div>
        </div>

        <div className="col-xs-12  col-lg-4">
          <div className="card-service">
            <div className="service-img simple is-inview">
              <img src={uniqueStays} alt="Unique Stays" />
            </div>
            <div className="service-caption courant is-inview">
              <h2>Unique Stays</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
