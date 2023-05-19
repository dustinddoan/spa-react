import React, { useState } from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  onSubmit: (taskItem: TaskItem) => void;
  closeModal: () => void;
};

export const AddTaskModal: React.FC<Props> = ({ onSubmit, closeModal }) => {
  const [taskItem, setTaskItem] = useState({
    title: "",
    date: ""
  });
  const handleOnChage = (e: any) => {
    setTaskItem({
      ...taskItem,
      title: e.target.value
    });
  };

  const onClickHandler = (e: any) => {
    e.preventDefault();
    console.log(taskItem);
    if (taskItem.title.trim()) {
      onSubmit({ ...taskItem, date: new Date().toDateString() });
      setTaskItem({ ...taskItem, title: "" });
      closeModal();
    }
  };

  const onCancelHandler = () => {};

  return (
    <>
      <label>
        Task Title
        <input type="text" onChange={handleOnChage} value={taskItem.title} />
        <button onClick={onClickHandler} disabled={taskItem.title === ""}>
          Submit
        </button>
        <button>Cancel</button>
      </label>
    </>
  );
};
