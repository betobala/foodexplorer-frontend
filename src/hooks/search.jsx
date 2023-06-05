import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [meals, setMeals] = useState([])

  async function fetchMeals(search){
        const response = await api.get(`/meals?title=${search}`)
        setMeals(response.data)
        
    }

  return(
    <SearchContext.Provider value={{ 
      meals,
      fetchMeals
      }}>
      {children}
    </SearchContext.Provider>
  )
}

function useSearch(){
  const context = useContext(SearchContext)
  
  return context
}

export { SearchProvider, useSearch }