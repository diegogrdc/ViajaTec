import React, { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import RutaGarzaSada from '../assets/RutaGarzaSada.png'
import RutaValleAlto from '../assets/RutaValleAlto.png'
import RutaEscuelasYHospitales from '../assets/RutaEscuelasYHospitales.png'
import RutaNocturna from '../assets/RutaNocturna.png'
import RutaRevolucion from '../assets/RutaRevolucion.png'

const initialConfig = {
  zoom: 12,
  center: { lat: 25.65180666937636, lng: -100.28951854530001 }
};

const Gmap = () => {

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{padding: "20px", width: "800px", height: "600px"}}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1n_C1lCcAobnXuwPc-H9h3qoWQ3PcXls&ehbc=2E312F" width="100%" height="100%">
        </iframe>
      </div>
      <div style={{padding: "20px"}}>
        <h1>Rutas y Horarios</h1>
        <p>Servicio invierno, enero-mayo, verano y agosto-diciembre, 2022</p>
        <div style={{width: "500px", height:"400px"}}>
        <Carousel>
              <div>
                  <img src={RutaGarzaSada} />
                  <p className="legend">Ruta Garza Sada</p>
              </div>
              <div>
                  <img src={RutaEscuelasYHospitales} />
                  <p className="legend">Ruta Escuelas Y Hospitales</p>
              </div>
              <div>
                  <img src={RutaRevolucion} />
                  <p className="legend">Ruta Revolucion</p>
              </div>
              <div>
                  <img src={RutaValleAlto} />
                  <p className="legend">Ruta Valle Alto</p>
              </div>
              <div>
                  <img src={RutaNocturna} />
                  <p className="legend">Rutas Nocturnas</p>
              </div>
          </Carousel>
          </div>
      </div>
    </div>
  );
};

export default Gmap;
