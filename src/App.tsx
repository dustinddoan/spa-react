import React, { useState } from "react";
import { TaskItem } from "./components/TaskListItem";
import { AddTaskModal } from "./components/AddTaskModal";
import { TaskList } from "./components/TaskList";
import "./styles.css";

let initialValue: TaskItem[] = [];

export default function App() {
  const [tasks, setTasks] = useState(initialValue);

  const addTaskHandler = (taskItem: TaskItem) => {
    setTasks([...tasks, taskItem]);
  };

  const [hide, setHide] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const hanldeClick = () => {
    setHide(true);
    setModalShow(true);
  };

  const closeModal = () => {
    console.log("close");
    setHide(false);
    setModalShow(false);
  };

  return (
    <div className="App">
      <div>Task Tracker</div>

      {!hide ? <button onClick={hanldeClick}>Add Task</button> : <></>}
      {modalShow ? (
        <AddTaskModal onSubmit={addTaskHandler} closeModal={closeModal} />
      ) : (
        <></>
      )}
      <TaskList tasks={tasks} />
    </div>
  );
}
