import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import "./App.css";

function App() {
  return (
    <div className="main">
      <SearchPanel />
      <div className="todoList">
        <TodoList />
      </div>
      <Filter />
    </div>
  );
}

export default App;
