import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from './TodoFilters.components'

const TodoFilters = ({
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearCompleted,
  stats,                 
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={stats?.total ?? total} pending={stats?.pending ?? 0} done={stats?.done ?? 0} />
      <FilterButtonContainer>
        <FilterButton action={showAllTodos} active={activeFilter} filter='Todas'/>
        <FilterButton action={showActiveTodos} active={activeFilter} filter='Activas'/>
        <FilterButton action={showCompletedTodos} active={activeFilter} filter='Completadas'/>
        <button onClick={handleClearCompleted} className='text-gray-400 hover:text-white transition-all duration-300 ease-in-out'>
          Limpiar
        </button>
      </FilterButtonContainer>
    </FiltersContainer>
  )
}

import PropTypes from 'prop-types'
TodoFilters.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  showAllTodos: PropTypes.func.isRequired,
  showActiveTodos: PropTypes.func.isRequired,
  showCompletedTodos: PropTypes.func.isRequired,
  handleClearCompleted: PropTypes.func.isRequired,
  stats: PropTypes.shape({
    total: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired,
  }).isRequired,
}

export default TodoFilters
