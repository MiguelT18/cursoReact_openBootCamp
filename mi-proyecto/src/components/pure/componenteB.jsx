import React from "react";
import PropTypes from "prop-types";
import Contacto from "./contacto";

const ComponenteB = (props) => {
  const { contacto, cambiarEstado } = props;

  return (
    <div>
      <p>
        {contacto.conectado ? "Contacto en Línea" : "Contacto No Disponible"}
      </p>
      <button type="button" onClick={() => cambiarEstado(!contacto.conectado)}>
        {contacto.conectado ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  cambiarEstado: PropTypes.func.isRequired,
};

export default ComponenteB;
