import List from "../List/List";
import React, { useContext } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import "./Main.css";
import Context from "../Context";
function Main() {
  const { setBusinessData, businessData } = useContext(Context);

  return (
    <div className="main-wrapper">
      <Header />
      <Form setBusinessData={setBusinessData} />
      <List businessData={businessData} />
    </div>
  );
}

export default Main;
