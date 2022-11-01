import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>HOME</h2>
      <br></br>
      <ul>
        <li><a href="/map">Mapa</a></li>
        <li><a href="/login">Inicio de sesión</a></li>
        <li><a href="/about">Acerca de:</a></li>
        <li><a href="/rules">Reglas para utilizar el transporte</a></li>
      </ul>
    </div>
  );
}
