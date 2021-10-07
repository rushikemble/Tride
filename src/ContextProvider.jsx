import React, { useState } from "react";
import App from "./App";
import Context from "./Context";
function ContextProvider() {
  const [businessData, setBusinessData] = useState([]);
  return (
    <div>
      <Context.Provider value={{ setBusinessData, businessData }}>
        <App />
      </Context.Provider>
    </div>
  );
}
export default ContextProvider;
