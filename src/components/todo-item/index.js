import React from "react";
import { useAppState } from "../../contexts/app-state";
import "./style.scss";

export default function TodoItem(props) {
  const { updateTodoList } = useAppState();
  const { data } = props;
  const handleCheck = (evt) => {
    updateTodoList(data.id);
  };
  return (
    <div className="todo-item">
      <div>
        <label>
          <b>Title: </b>
        </label>
        <span>{data.title}</span>
      </div>
      <div>
        <label>
          <b>Completed: </b>
        </label>
        <input
          type="checkbox"
          checked={data.completed}
          onChange={handleCheck}
        />
      </div>
    </div>
  );
}
