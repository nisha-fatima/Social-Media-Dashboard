import React from "react";
import "./card.css";

export default function card({ image, text, classes, pera, pera1, label}) {

    const darkMode = localStorage.getItem("theme") && localStorage.getItem("theme") === "dark" ? true : false
    return (
        <div className={`card ${classes}`}>
            <div className="top-container">
                <img src={image} alt={image} className="image" />
                <span className="label">{label}</span>
            </div>
            <div className={`text ${darkMode ? "text-light" : "text-dark"}`}>{text}</div>
            <div className={`pera ${darkMode ? "text-ligh" : "text-dark"}`}>{pera}</div>
            <div className={`pera1`}>{pera1}</div>
        </div>
        
    );
}

            