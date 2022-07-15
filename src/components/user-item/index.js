import React, { useMemo, useState } from "react";
import { useAppState } from "../../contexts/app-state";
import TodoItem from "../todo-item";
import "./style.scss";

export default function UserItem(props) {
  const { data } = props;
  const { todoList } = useAppState();
  const [todoOpen, setTodoOpen] = useState(false);

  const userTodoList = useMemo(() => {
    if (data.id && todoList && todoList.length > 0) {
      return todoList.filter((item) => item.userId === data.id);
    }
    return [];
  }, [data?.id, todoList]);

  const completedCount = useMemo(() => {
    return userTodoList.filter((item) => item.completed).length;
  }, [userTodoList]);

  const handlePrevent = (evt) => {
    evt.stopPropagation();
  };

  return (
    <div className="user" onClick={() => setTodoOpen(!todoOpen)}>
      <div className="user_item">
        <div className="user_item-line">
          <div className="user_item-line-item">
            <label>
              <b>Name: </b>
            </label>
            <span>{data.name}</span>
          </div>
          <div className="user_item-line-item">
            <label>
              <b>Email: </b>
            </label>
            <span>{data.email}</span>
          </div>
        </div>
        <div className="user_item-line">
          <div className="user_item-line-item">
            <label>
              <b>Phone Number: </b>
            </label>
            <span>{data.phone}</span>
          </div>
          <div className="user_item-line-item">
            <label>
              <b>Address: </b>
            </label>
            <span>{`${data.address.street} ${data.address.city}`}</span>
          </div>
        </div>
        <div className="user_item-line">
          <div className="user_item-line-item">
            <label>
              <b>Website: </b>
            </label>
            <a href={`https://${data.website}`} target="_blank">
              Link
            </a>
          </div>
          <div className="user_item-line-item">
            <label>
              <b>Completed Count: </b>
            </label>
            <span>{completedCount}</span>
          </div>
        </div>
      </div>
      {todoOpen && (
        <div className="todo_list" onClick={handlePrevent}>
          {userTodoList.map((todoItem, index) => (
            <TodoItem
              key={`key-todo-${todoItem.userId}-${todoItem.id}`}
              data={todoItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
