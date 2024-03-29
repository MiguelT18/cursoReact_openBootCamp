import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Importamos la hoja de estilos de task.scss
import "../../styles/task.css";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${task.name} is going to amount`);
    };
  }, [task]);

  return (
    <div>
      <h2 className="task-name">Nombre: {task.name}</h2>
      <h3>Descripción: {task.description}</h3>
      <h4>Nivel: {task.level}</h4>
      <h5>Estado: {task.completed ? "COMPLETADO" : "PENDIENTE"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
