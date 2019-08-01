import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="divsionImages">
      <img src={props.image} alt={props.name} className="img" onClick={() => props.removeFriend(props.id)}></img>
    </div>
  );
}

export default FriendCard;
