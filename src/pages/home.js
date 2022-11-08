import React from "react";
//import {Link} from "react-router-dom";
import "./home.css"
import iconoazul2 from '../assets/icono.png'
import camionSinFondo from '../assets/camionSinFondo.png'


function openPopup1()
{
  let popup = document.getElementById("popup1");
  popup.classList.add("openpopup");
}

function closePopup1()
{
  let popup = document.getElementById("popup1");
  popup.classList.remove("openpopup");
}

function openPopup2()
{
  let popup = document.getElementById("popup2");
  popup.classList.add("openpopup");
}

function closePopup2()
{
  let popup = document.getElementById("popup2");
  popup.classList.remove("openpopup");
}

function openPopup3()
{
  let popup = document.getElementById("popup3");
  popup.classList.add("openpopup");
}

function closePopup3()
{
  let popup = document.getElementById("popup3");
  popup.classList.remove("openpopup");
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

       <div className="thumb">
          <button type="submit" className="btn" onClick={openPopup1}>?</button>
          <button type="submit" className="btn" onClick={openPopup2}>?</button>
          <button type="submit" className="btn" onClick={openPopup3}>?</button>
          <div className="popup" id="popup1">
              <img src={iconoazul2}></img>
              <h3>¿QUIÉN PUEDE UTILIZAR EL SERVICIO?</h3>
              <p>Estudiantes que estén inscritos en el semestre en curso.</p>
              <br></br>
              <p>Profesores y colaboradores que se encuentren laborando en el semestre.</p>
              <br></br>
              <p>IMPORTANTE: No pueden hacer uso del servicio EXATEC ni personal ajeno a la institución.</p>
              <button type="button" onClick={closePopup1}>OK</button>
          </div>

          <div className="popup" id="popup2">
              <img src={iconoazul2}></img>
              <h3>¿TIENE COSTO?</h3>
              <p>El servicio es gratuito para estudiantes, profesores y colaboradores del Tecnológico de Monterrey.</p>
              <br></br>
              <button type="button" onClick={closePopup2}>OK</button>
          </div>


          <div className="popup" id="popup3">
              <img src={iconoazul2}></img>
              <h3>¿PUEDO ABORDAR EL SERVICIO AFUERA DEL CAMPUS?</h3>
              <p>Solamente está permitido en el servicio diurno:</p>
              <br></br>
              <ul>
                <li>Ruta Garza Sada</li>
                <li>Ruta Hospitales y Escuelas</li>
                <li>Ruta Revolución</li>
                <li>Ruta Valle Alto</li>
                <li>Directo San José - Campus Monterrey</li>
              </ul>
              <button type="button" onClick={closePopup3}>OK</button>
          </div>
       </div>


       
    </div>
   
   
    
  );
}
