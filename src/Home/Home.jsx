import React, { useContext } from "react";
import Context from "../Context";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Explore from "./Explore";

import Hero from "./Hero";
import "./Home.css";
import Services from "./Services";
function Home() {
  const { setBusinessData } = useContext(Context);
  return (
    <div className="home-container">
      <Header />
      <Form setBusinessData={setBusinessData} />
      <Hero />
      <Explore />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
