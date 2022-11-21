import React from "react";
import "./loginform.css";

const LoginForm = () => {
  return (
    <div className="page">
      <div className="cover">
        <h1>Viaja-Tec</h1>
        <input type="text" placeholder="Matricula" />
        <input type="password" placeholder="Contraseña" />
        <div className="login-btn">Ingresar</div>
      </div>
    </div>
  );
};

export default LoginForm;
