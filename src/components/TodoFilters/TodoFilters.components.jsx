const FiltersContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      {children}
    </div>
  );
};


const ItemsLeft = ({ total=0 }) => {
  return (
    <p className="text-sm text-gray-400">{total} tareas </p>
  );
}


const FilterButtonContainer = ({ children }) => {
  return (
    <div className="flex items-center space-x-2"> 
      {children}
    </div>
  );
}

const FilterButton = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        `hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` +
        (active === filter ? ' text-blue-400' : ' text-gray-400')
      }
    >
      {filter}
    </button>
  );
};


    
export {  FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton };