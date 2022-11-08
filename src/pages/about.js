import React from "react";
import "./about.css"
import camion from '../assets/camion.png'
import email from '../assets/icons/email.png'
import instagram from '../assets/icons/instagram.png'
import location from '../assets/icons/location.png'
import telefono from '../assets/icons/telefono.png'
import whatsapp from '../assets/icons/whatsapp.png'
import twitter from '../assets/icons/twitter-sign.png'
import facebook from '../assets/icons/facebook.png'

export default function About() {
  return (
    <div className="body">
      <h2>Contáctanos</h2>
      <div className="imgtxt">
          <img src={camion} className="camion2"></img>
          <div className="texto">
            <p>Queremos que tu experiencia en el Tec sea extraordinaria. Resolvemos tus dudas y trámites en un solo lugar.</p>
            <div>
              <br></br>
              <ul className="noBull">
                <li className="liSpace">
                  <img src={location} alt="location icon" width="15" height="15"></img>
                  <span>      Av. Eugenio Garza Sada 2501 Sur Col. Tecnológico C.P. 64849 | Monterrey, Nuevo León, México</span>
                </li>
                <li className="liSpace">
                  <img src={telefono} alt="phone icon" width="15" height="15"></img>
                  <span>      +52 81 8358 2000</span>
                </li>
                <li className="liSpace">
                  <img src={email} alt="email icon" width="15" height="15"></img>
                  <span>      tecservices@servicios.tec.mx</span>
                </li>
              </ul>
            </div>
            <br></br>
            <br></br>
            <p className="socialPar">SÍGUENOS EN NUESTRAS REDES SOCIALES</p>
            <ul className="noBull">
                <li className="liSpace">
                  <img src={twitter} alt="twitter icon" width="15" height="15"></img>
                  <span>      twitter.com/movilidad_mty</span>
                </li>
                <li className="liSpace">
                  <img src={facebook} alt="facebook icon" width="15" height="15"></img>
                  <span>      facebook.com/movilidad.mty</span>
                </li>
                <li className="liSpace">
                  <img src={instagram} alt="instagram icon" width="15" height="15"></img>
                  <span>      instagram.com/movilidad.mty/</span>
                </li>
                <li className="liSpace">
                  <img src={whatsapp} alt="whatsapp icon" width="15" height="15"></img>
                  <span>      +52 811 625 5123</span>
                </li>
              </ul>
          </div>
         
      </div>
    </div>
  );
}
