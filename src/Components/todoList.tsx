import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  if (!todos.length) {
    return <p className="center">пока дел нет</p>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.compleated) {
          classes.push("compleated");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.compleated}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
