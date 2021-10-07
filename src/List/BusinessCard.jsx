import React from "react";
import { PhoneRounded, PinDropOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import "./BusinessCard.css";

function BusinessCard(props) {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={props.business.image_url} alt="businessimg" />
      </div>

      <div className="card-data-container">
        <h3>
          <a href={props.business.url} target="_blank" rel="noreferrer">
            {props.business.name.toUpperCase()}
          </a>
        </h3>
        <div className="rating-div">
          <Rating name="read-only" value={props.business.rating} readOnly />{" "}
          <h4>{props.business.review_count}</h4>
        </div>
        <div className="is-open-div">
          {props.business.is_closed ? (
            <h4 style={{ color: "red" }}>Closed</h4>
          ) : (
            <h4 style={{ color: "green" }}>Open</h4>
          )}
          <span>
            <h4 style={{ marginLeft: "5px" }}>{props.business.price}</h4>
          </span>
        </div>
        <div className="location">
          <PinDropOutlined />{" "}
          <h4 style={{ marginRight: "5px" }}>
            {props.business.location.display_address[0]},
          </h4>
          <h4>{props.business.location.display_address[1]}</h4>
        </div>
        <div className="phone-div">
          <PhoneRounded /> <h4>{props.business.phone}</h4>
        </div>
        <div className="card-btn-div">
          <a href={props.business.url} target="_blank" rel="noreferrer">
            <button>Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
