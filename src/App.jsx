import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
      <div className="bg-blue-400 min-h-screen font-inter text-white flex flex-col items-center justify-center px-4">
        <div className="container bg-blue-300 flex flex-col max-w-md">
          <Title title="TODO APP" />
          <Input/>
          <TodoList>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
