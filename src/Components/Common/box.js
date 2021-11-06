import React from "react";
import "./box.css";

export default function box({ classes1, page5, text3, image1, pera2 }) {
  const darkMode = localStorage.getItem("theme") && localStorage.getItem("theme") === "dark" ? true : false

  return (
    <div className={`box ${classes1}`}>
      <div className="pic">
        <span className="page5">{page5}</span>
        <img src={image1} alt={image1} className="image1" />
      </div>
      <div className="pic">
        <span className={`text3 ${darkMode ? "text-light" : "text-dark"}`}>{text3}</span>
        <span className="pera2">{pera2}</span>
      </div>
    </div>
  );
}
