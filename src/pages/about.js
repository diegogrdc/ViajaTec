import React from "react";
import "./about.css"
import camion from '../assets/camion.png'

export default function About() {
  return (
    <div className="body">
      <h2>Contáctanos</h2>
      <div className="imgtxt">
          <img src={camion} className="camion2"></img>
          <div className="texto">
          <p>Queremos que tu experiencia en el Tec sea extraordinaria. Resolvemos tus dudas y trámites en un solo lugar.</p>

          </div>
         
      </div>
    </div>
  );
}
