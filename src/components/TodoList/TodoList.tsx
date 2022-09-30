import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import type { RootState } from "../../app/store";

export default function TodoList() {
  const allTodoValue = useSelector(
    (state: RootState) => state.todoList.allTodo
  );
  const filter = useSelector((state: RootState) => state.filter.status);

  console.log("allTodoValue", allTodoValue);

  const filterAllTodoValue = () => {
    if (filter === "all") {
      return allTodoValue;
    } else if (filter === "doing") {
      return allTodoValue.filter((item) => !item.isComplete);
    } else {
      return allTodoValue.filter((item) => item.isComplete);
    }
  };

  return (
    <div>
      <ul>
        {filterAllTodoValue().map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              name={item.name}
              isComplete={item.isComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}
