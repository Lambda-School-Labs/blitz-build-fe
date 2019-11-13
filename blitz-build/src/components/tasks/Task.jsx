import React from "react";
import styled from "styled-components";

//components
import TaskStatus from "./TaskStatus";
import EditTask from "./EditTask"
import DeleteTask from './DeleteTask'

export default function Task({tasks, task, setTasks }) {
  return (
    <>
      <div>
        <h1 style={{ margin: 0 }}> {task.name}</h1>
        <p style={{ margin: 0 }}>{task.description}</p>
        <TaskStatus status={"today"} />
      </div>
      <EditTask/>
			<DeleteTask/>
    </>
  );
}