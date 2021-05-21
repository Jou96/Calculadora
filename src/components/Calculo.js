import React, { useState, useRef } from "react";
import "../App.css";

export default function Calculo({ resultadoRef, calculo }) {
  return (
      
    <div className="calculo">
      <button onClick={calculo.calculo}>{calculo.name}</button>
      <input  ref={resultadoRef} type="number" />
    </div>
    
  );
}
