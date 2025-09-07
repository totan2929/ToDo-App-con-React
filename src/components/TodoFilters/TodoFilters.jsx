
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from './TodoFilters.components'

const TodoFilters = () => {
  return (
    <FiltersContainer>
      <ItemsLeft  />
      <FilterButtonContainer>
        <FilterButton action={()=>{}} active='Todas' filter='Todas'/>
        <FilterButton action={()=>{}} active='Todas' filter='Activas'/>
        <FilterButton action={()=>{}} active='Todas' filter='Completadas'/>
          <button className='text-gray-400 hover:text-white transition-all duration-300 ease-in-out'>Eliminar Completada

          </button>
      </FilterButtonContainer>
    </FiltersContainer>
  )
}

export default TodoFilters