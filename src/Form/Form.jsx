import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Form({ setBusinessData }) {
  const [location, setlocation] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const typeEvent = (e) => {
    setType(([e.target.name] = e.target.value));
  };

  const fetchData = async (type, location) => {
    const Token = process.env.REACT_APP_API_KEY;
    await axios
      .get(
        (`https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?term=${type}&location=${location}`,
        {
          mode: "cors",
          credentials: "include",
        }),
        {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Access-Control-Allow-Origin": "*",
          },
          params: {
            term: `${type}`,
            location: `${location}`,
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
  const submitForm = (e) => {
    fetchData(type, location);
    e.preventDefault();
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
