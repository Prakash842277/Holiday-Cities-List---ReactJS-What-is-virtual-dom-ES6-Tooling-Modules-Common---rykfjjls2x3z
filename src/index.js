// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// function generateCodeFromObject(obj){
//     //return a code generated string
//    }
   
// module.exports=generateCodeFromObject;


// // ReactDOM.render(<App />, document.getElementById("root"));
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

