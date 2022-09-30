import { useDispatch } from "react-redux";
import { changeItemStatus } from "../../features/todoList/todoListSlice";

interface TodoItemProps {
  name: string;
  isComplete: boolean;
  id: string;
}

export default function TodoItem({ id, name, isComplete }: TodoItemProps) {
  const dispatch = useDispatch();

  const changeTodoStatus = () => {
    dispatch(changeItemStatus(id));
  };

  return (
    <>
      <li
        style={isComplete ? { textDecoration: "line-through" } : {}}
        onClick={() => changeTodoStatus()}
      >
        {name}
      </li>
    </>
  );
}
