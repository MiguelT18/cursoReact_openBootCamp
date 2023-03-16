/**
 * Ejemplo de uso del método de Ciclo de Vida en componente CLASE y el hook de ciclo de vida en Componente Funcional
 */

import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }, []);

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
