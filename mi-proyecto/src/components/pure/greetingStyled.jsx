import React, { useState } from "react";

// Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
  color: "white",
  fontWeight: "bold",
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

// ? Estilo para el botón
const buttonStyle = {
  padding: "10px 20px 10px 20px",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#282c34",
};

const GreetingStyled = (props) => {
  // Generamos un estado para el componente y así controlar si el usuario está o no logueado
  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <p>Hola, {props.name}</p> : <p>Please LogIn</p>}
      <button
        style={buttonStyle}
        onClick={() => {
          console.log("Botón pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};

export default GreetingStyled;
