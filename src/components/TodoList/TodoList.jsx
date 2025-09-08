import Todo from "../Todo/Todo";
import TodoFilters from "../TodoFilters/TodoFilters";

const TodoList = ({
  todos,
  handleSetCompleted,
  handleDelete,
  activeFilter,
  showActiveTodos,
  showAllTodos,
  showCompletedTodos,
  handleClearCompleted,
  stats
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleSetCompleted={handleSetCompleted}
          />
        );
      })}

      {/* ✅ Mensaje cuando no hay tareas */}
      {todos.length === 0 && (
        <div className="bg-gray-600 p-4 text-center text-gray-300">
          No hay tareas
        </div>
      )}

      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
        stats={stats}
      />
    </div>
  );
};

export default TodoList;
