import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TodoForm = ({addTodo}) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(newItem === "") return
    addTodo(newItem);
    setNewItem("");
  }

  
  return (
    <form onSubmit={handleSubmit} className="new-form">
    <label htmlFor="newItem">New Item</label>
    <input
      type="text"
      id="newItem"
      onChange={(e) => setNewItem(e.target.value)}
      value={newItem}
    />
    <div>
      <button type="submit" className="btn">Add</button>
    </div>
  </form>
)
}
