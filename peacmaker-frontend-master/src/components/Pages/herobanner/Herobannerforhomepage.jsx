import React from "react";
import "./herobanner.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Herobannerforhomepage = (props) => {
  return (
    <div className="herobanner__container">
      <div className="herobanner__container-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="bt">
          <Link to="/startup">
            <Button text1={"Start"} />
          </Link>
        </div>
      </div>
      <img className="herobanner__container-pic" src={props.img} alt="" />
    </div>
  );
};

export default Herobannerforhomepage;
