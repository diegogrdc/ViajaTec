import React, { useState, useEffect } from "react";
//import {Link} from "react-router-dom";
import "./home.css"
import azul from '../assets/azul.png'
import camionSinFondo from '../assets/camionSinFondo.png'

function imgSlider(anything)
{
  document.querySelector('.camion').src= anything;
}

export default function Home() {
  return (
    <div className="header">
      <div className="circle"></div>
      <div className="content">
        <div className="textBox">
            <h1>Circuito Tec</h1>
            <br></br>
            <br></br>                  
            <p>El CircuitoTec cuenta con puntos de movilidad estratégicos
                      para ayudar a los estudiantes, colaboradores y profesores a 
                      transportarse de una manera rápida, segura y sostenible. Conoce 
                      aquí toda la información para su uso.</p>
            <br></br>
            <a href="#">Periodo AGOSTO-DICIEMBRE 2022 <br></br> Servicio disponible a partir del lunes 08 de agosto hasta el viernes 09 de diciembre.</a>
          </div>

          <div className="imgBox">
             <img src={camionSinFondo} className="camion"></img>
          </div>  
        </div>
      <ul className="thumb">
        <li><img src={azul}></img></li>
        <li><img src={azul}></img></li>
        <li><img src={azul}></img></li>
      </ul>

    </div>
   
    
  );
}
