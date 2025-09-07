import { useState, useEffect } from "react";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";


function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, title: 'Tarea 2', completed: true },
    { id: 3, title: 'Tarea 3', completed: false },
    { id: 4, title: 'Tarea 4', completed: true },
  ])

  const [activeFilter, setActiveFilter] = useState("Todas");

  const [filteredTodos,  setFilteredTodos ] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.length>0 ? todos[todos.length -1].id : 1;

    const newTodo = { id: lastId + 1, title, completed: false }
    const todoList = [...todos, newTodo]
    setTodos(todoList)
  }

  const handleSetCompleted = (id) => {
    const updatedList = todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedList)
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList)
  }

  

  const handleClearCompleted = () => {
    const updatedList = todos.filter(todo => !todo.completed)
    setTodos(updatedList)
  }


const showAllTodos = () => setActiveFilter("Todas");
const showActiveTodos = () => setActiveFilter("Activas");
const showCompletedTodos = () => setActiveFilter("Completadas");


  useEffect(() => {
    if(activeFilter === 'Todas'){
      setFilteredTodos(todos)
    } else if (activeFilter === 'Activas'){
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (activeFilter === 'Completadas'){
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  }, [activeFilter, todos])
  

  return (
    // Contenedor principal
<div className="min-h-screen font-inter text-white flex items-center justify-center px-4">
  <div className="w-full max-w-xl">
    {/* Tarjeta principal */}
    <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-glass ring-1 ring-white/15 p-6 space-y-6">
      <Title title="ToDo APP" />
          <Input addTodo={addTodo}/>
          <TodoList 
          activeFilter={activeFilter}
          todos={filteredTodos}
          handleSetCompleted={handleSetCompleted}
          handleDelete={handleDelete}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearCompleted={handleClearCompleted}
          />
    </div>
  </div>
</div>

  );
}

export default App;
