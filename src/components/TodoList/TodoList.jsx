import Todo from "../Todo/Todo";
import TodoFilters from "../TodoFilters/TodoFilters";

const TodoList = ({ todos, handleSetCompleted, handleDelete, activeFilter, showActiveTodos, showAllTodos, showCompletedTodos, handleClearCompleted }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      { todos.map(todo => {
        return (
          <Todo 
          key={todo.id} 
          todo={todo} 
          handleDelete={handleDelete}
          handleSetCompleted={handleSetCompleted}/>
        )
      })}
      <TodoFilters 
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
};



export default TodoList;
