import React from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  tasks: TaskItem[];
};

export const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div>
            <div>{task.title}</div>
            <div>{task.date}</div>
          </div>
        ))
      ) : (
        <>No tasks have been added yet.</>
      )}
    </div>
  );
};
