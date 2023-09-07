/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              key={todo?.id}
            />
          );
        })}
      </ul>
    </>
  );
};
