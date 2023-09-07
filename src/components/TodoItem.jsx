/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const TodoItem = ({
  id,
  completed,
  content,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      {content}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">delete</button>
    </li>
  );
};
