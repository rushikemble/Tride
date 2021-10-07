import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Form({ setBusinessData }) {
  const [location, setlocation] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(location, type);

  const typeEvent = (e) => {
    setType(([e.target.name] = e.target.value));
  };

  const submitForm = (e) => {
    fetchData(location, type);
    e.preventDefault();
  };

  const fetchData = async (location, type) => {
    const Token = process.env.REACT_APP_BEARER_TOKEN;
    await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=${type}&location=${location}&sort_by=best_match`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setError(false);
        setBusinessData(res.data.businesses);
      })
      .catch((err) => {
        setError("Error while loading data");
        setLoading(false);
      });
  };

  return (
    <div className="form-container">
      <div className="form-inner-container">
        <form onSubmit={submitForm} className="form-wrapper">
          <div className="input-location-div">
            <input
              type="text"
              name="location"
              onChange={(e) => setlocation(e.target.value)}
            />
            <button type="submit" onClick={submitForm}>
              <Link to="/Main">
                <Search />
              </Link>
            </button>
          </div>
          <div className="select-type-div">
            <select name="type" onChange={typeEvent}>
              <option value="Restaurants">Restaurants</option>
              <option value="Delivery">Delivery</option>
              <option value="Burgers">Burgers</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Reservations">Reservations</option>
              <option value="Japanese">Japanese</option>
              <option value="Mexican">Mexican</option>
              <option value="Thai">Thai</option>
            </select>

            <button value="Hotels" onClick={typeEvent}>
              Hotels
            </button>
            <button value="Attractions" onClick={typeEvent}>
              Attractions
            </button>
            <button value="Flights" onClick={typeEvent}>
              Flights
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
