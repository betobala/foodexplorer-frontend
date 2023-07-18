import { Container, ButtonBack, Content, Image, Details, Tags, ButtonWrapper } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { ButtonText } from "../../../components/ButtonText"
import { IngredientTag } from "../../../components/IngredientTag"
import { Button } from "../../../components/Button"
import CarrotLeft from "../../../assets/icons/CaretLeft.svg"
import MealImage from "../../../assets/images/name=ravanello, size=400.png"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../../services/api"
import { FooterSection } from "../../../components/FooterSection"


export function MealDetailsAdmin() {
  const { meal_id } = useParams();
  const [meal, setMeal] = useState({})
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }
  function handleEditMeal(){
    navigate(`/edit/${meal_id}`)
  }


  useEffect(() => {
    async function fetchMeal(meal_id) {
      const response = await api.get(`/meals/${meal_id}`);
      setMeal(response.data);
    }
    fetchMeal(meal_id);

  }, []);

  return (
    <Container>
      <Header isAdmin />

      <ButtonBack>
        <ButtonText 
          title="voltar"
          icon={CarrotLeft}
          onClick={() => handleBack()}
        />
      </ButtonBack>

      <Content>

        <Image>
          <img src={`${api.defaults.baseURL}/files/${meal.avatar}`} />
        </Image>

        <Details>
          <h1>{meal.name}</h1>
          <p>{meal.description}</p>

          <Tags>
            {meal.ingredients &&
              meal.ingredients.map((ingredient) => (
                <IngredientTag
                  key={ingredient.id}
                  title={ingredient.name} />
              ))}
          </Tags>

          <ButtonWrapper>
            <Button
              title="Editar Prato"
              onClick={() => handleEditMeal()}
            />
          </ButtonWrapper>

        </Details>

      </Content>

      <FooterSection />
      <Footer />
    </Container>
  )
}

