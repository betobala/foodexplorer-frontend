import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"

export const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [meals, setMeals] = useState([])
  const [searchName, setSearchName] = useState()

  async function fetchMealsSearch(search) {

    if(search !== ""){
      setMeals([])
      const response = await api.get(`/meals?name=${search}`)
      setMeals(response.data)
      setSearchName(search)
    } else {
      setSearchName(search)
      setMeals([])
    }
  }

  return (
    <SearchContext.Provider value={{
      meals,
      fetchMealsSearch,
      searchName
    }}>
      {children}
    </SearchContext.Provider>
  )
}

function useSearch() {
  const context = useContext(SearchContext)

  return context
}

export { SearchProvider, useSearch }