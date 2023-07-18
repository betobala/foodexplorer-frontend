import { Container } from "./styles.js"
import Search from "../../assets/icons/Search.svg"
import { useSearch } from "../../hooks/search"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function Input({ icon: Icon, isSearch = false, border = false, ...rest }) {

  const [search, setSearch] = useState("")
  const { fetchMealsSearch } = useSearch()
  const navigate = useNavigate()

  function handleFetchMealsSearch(search) {
    fetchMealsSearch(search)
    navigate("/search")
  }

  return (
    <Container>

      <input
        onChange={e => setSearch(e.target.value)}
        {...rest} />
      {
        isSearch ?
          <motion.button
            whileTap={{scale: 1.1}}
            onClick={() => handleFetchMealsSearch(search)}
          >
            <img src={Search} />
          </motion.button>
          : <></>
      }
    </Container>
  )
}