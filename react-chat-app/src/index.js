import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Header from "./Header"
import reportWebVitals from "./reportWebVitals";

function Usercheck() {
  const userPresent = localStorage.getItem("username") || null;
  if (!userPresent) {
    return <User />;
  } else {
    return <App />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Usercheck />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
