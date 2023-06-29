import { Container, ItemImage, NameButton } from "./styles";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function FavoritedItem({ name, meal_id, image: Image, fetchMeal }){
  const { user } = useAuth()

  async function handleRemoveFavorite(user_id, meal_id){
    const response = confirm("Tem certeza que deseja desfavoritar este produto?")

    if(response){
      await api.delete(`/favorites?user_id=${user_id}&meal_id=${meal_id}`)
      fetchMeal(user_id)
    }
  }
  return (
    <Container>
      <ItemImage to={`/details/${meal_id}`}>
        <img src={Image}/>
      </ItemImage>

      <NameButton>
        <h3>{name}</h3>

        <ButtonText
          title="Remover dos Favoritos"
          onClick={() => handleRemoveFavorite(user.id, meal_id)}
        />
      </NameButton>
      
    </Container>
  )
}