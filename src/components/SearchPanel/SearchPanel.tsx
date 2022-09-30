import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/todoList/todoListSlice";

export default function SearchPanel() {
  const [todoItemValue, setTodoItemValue] = useState("");

  const dispatch = useDispatch();

  const handleAddTodoItem = () => {
    dispatch(addItem(todoItemValue));
  };

  return (
    <div>
      <input
        placeholder="please enter a to-do list"
        value={todoItemValue}
        onChange={(e) => setTodoItemValue(e.target.value)}
      />
      <button onClick={handleAddTodoItem}>add</button>
    </div>
  );
}
