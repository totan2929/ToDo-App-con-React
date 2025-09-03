import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <div className="bg-blue-400 min-h-screen text-white flex flex-col items-center justify-center px-4">
        <div className="container bg-blue-300 flex flex-col max-w-md">
          <Title title="TODO APP" />
          <Input/>
          <TodoList>
            <h2>Todo list</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio repudiandae magni sed corporis deleniti natus asperiores soluta iure? Odio sint soluta sunt dolore quam eum ipsam incidunt voluptas eos. Nisi?
            Eaque aut, vitae natus optio placeat quae. Omnis harum modi optio animi dolorum similique molestias, perferendis maxime necessitatibus saepe cupiditate, accusantium blanditiis voluptatibus minima, labore sapiente reiciendis ipsam quas pariatur.</p>
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
