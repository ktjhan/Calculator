import React, { useState } from "react";
import { calculationState } from "../../../data";

const STATE_NONE = 0;

const NumberButton = props => {
  return (
    <button className="button number">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.numberData}
    </button>
  );
};

export default NumberButton;
