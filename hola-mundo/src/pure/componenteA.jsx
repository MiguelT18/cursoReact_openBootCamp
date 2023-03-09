import React, { useState } from "react";
import PropTypes from "prop-types";
import Contacto from "./contacto";
import ComponenteB from "./componenteB";

const ComponenteA = (props) => {
  const { nombre, apellido, email, conectado } = props;
  const [estadoConectado, setEstadoConectado] = useState(conectado);
  const contacto = new Contacto(nombre, apellido, email, estadoConectado);

  function cambiarEstado(nuevoEstado) {
    setEstadoConectado(nuevoEstado);
  }

  return (
    <div>
      <h2>
        {nombre} {apellido}
      </h2>
      <p>{email}</p>
      <ComponenteB contacto={contacto} cambiarEstado={cambiarEstado} />
    </div>
  );
};

ComponenteA.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  conectado: PropTypes.bool.isRequired,
};

export default ComponenteA;
