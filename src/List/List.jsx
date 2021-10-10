import React from "react";
import Footer from "../Footer/Footer";
import BusinessCard from "./BusinessCard";
import "./BusinessCard.css";

function List({ businessData }) {
  return (
    <div className="List-container">
      <div className="list-filter-container"></div>
      <div className="list-wrapper">
        {businessData.map((business) => {
          return <BusinessCard business={business} key={business.id} />;
        })}
      </div>
      <div className="Pagination-wrapper"></div>
      <Footer />
    </div>
  );
}

export default List;
