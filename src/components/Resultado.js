import React, { useState, useRef } from "react";
import "../App.css";
export default function Resultado({ resultado, calculo }) {
  return (
    <div className="resultado">
      <div className="resul">
        <p> Total : {resultado}</p>
        <p >
          {calculo}{" "}
        </p>
      </div>
    </div>
  );
}
