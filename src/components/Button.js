import React, { Component } from "react";

function Button({type = "button", value, className, onClick}){
  return(
    <button className={className} type={type} onClick={onClick}>
      {value}
    </button>
  )
}

export default Button;