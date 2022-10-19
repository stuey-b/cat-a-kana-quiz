import React from "react";

const Card = (props) => {
  return <div className= "flex-col text-center items-center justify-center w-screen h-screen">{props.children}</div>;
};

export default Card;
