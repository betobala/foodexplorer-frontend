import { Container, Content, Title } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../../hooks/auth"
import { api } from "../../../services/api"
import { FavoritedItem } from "../../../components/FavoritedItem"


export function Favorites() {
  const { user } = useAuth()
  const [mealsFavorited, setMealsFavorited] = useState([])
  const navigate = useNavigate()


  function handleBack() {
    navigate(-1)
  }

  async function fetchMeal(user_id) {
    const response = await api.get(`/favorites/${user_id}`)
    setMealsFavorited(response.data)
  }

  useEffect(() => {
    fetchMeal(user.id)
  }, [])

  return (
    <Container>
      <Header />

      <Title>
        <h1>Meus favoritos</h1>
      </Title>

      <Content>
        {
          mealsFavorited.map((meal) => (
            <FavoritedItem
              fetchMeal={fetchMeal}
              meal_id={String(meal.id)}
              key={String(meal.id)}
              name={meal.name}
              image={`${api.defaults.baseURL}/files/${meal.avatar}`}
            />
          ))
        }
      </Content>

      <Footer />
    </Container>
  )
}
