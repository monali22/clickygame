import React from "react";
import "./style.css";

function Title(props) {
  
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.subtitle}</p>
    <p>Score:<span>{props.score}</span></p>
    <p>Top Score:<span>{props.topScore}</span></p>
    <p>{props.message}</p>
  </div>
</div>
  )
}

export default Title;
