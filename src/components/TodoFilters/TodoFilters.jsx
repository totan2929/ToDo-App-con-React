
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from './TodoFilters.components'

const TodoFilters = ({total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted}) => {
  return (
    <FiltersContainer>
      <ItemsLeft  total={total}/>
      <FilterButtonContainer>
        <FilterButton action={()=>showAllTodos()} active={activeFilter} filter='Todas'/>
        <FilterButton action={()=>showActiveTodos()} active={activeFilter} filter='Activas'/>
        <FilterButton action={()=>showCompletedTodos()} active={activeFilter} filter='Completadas'/>
          <button onClick={() => handleClearCompleted()} className='text-gray-400 hover:text-white transition-all duration-300 ease-in-out'>Limpiar

          </button>
      </FilterButtonContainer>
    </FiltersContainer>
  )
}

export default TodoFilters