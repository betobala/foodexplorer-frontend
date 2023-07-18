import { Container, ButtonBack, Content, Image, Details, Tags, ButtonWrapper } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { ButtonText } from "../../../components/ButtonText"
import { IngredientTag } from "../../../components/IngredientTag"
import { Button } from "../../../components/Button"
import CarrotLeft from "../../../assets/icons/CaretLeft.svg"
import ReceiptIcon from "../../../assets/icons/Receipt.svg"
import { Stepper } from "../../../components/Stepper"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../../services/api"
import { useAuth } from "../../../hooks/auth"


export function MealDetails() {
  const { meal_id } = useParams();
  const { user } = useAuth()
  const [meal, setMeal] = useState({})
  const [mealPriceInReais, setMealPriceInReais] = useState()
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }
  async function handleAddToCart(cart_id, meal_id){
    try {
      await api.post(`/carts/${cart_id}`, {
        meal_id,
        price: meal.price,
        number_of_products: quantity
      })

      alert("Item adcionado ao carrinho.")
      navigate("/")
      
    } catch (error) {
      
    }

  }

  useEffect(() => {
    async function fetchMeal(meal_id) {
      const response = await api.get(`/meals/${meal_id}`);
      setMeal(response.data);
    }
    fetchMeal(meal_id);

  }, []);

  useEffect(() => {
    if(meal.price){
      setMealPriceInReais(meal.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
    }
  }, [meal]);

  return (
    <Container>
      <Header />

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
            <Stepper
            quantity={quantity}
            setQuantity={setQuantity}
            />
            {
            meal.price &&
            window.innerWidth > 699 ? 
                                    <Button 
                                      title={`incluir - ${mealPriceInReais}`}
                                      onClick={() => handleAddToCart(user.cart_id, meal_id)}
                                    />
                                    :
                                    // {`pedir ${meal.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
                                    <Button 
                                      title={`pedir ${mealPriceInReais}`}
                                      onClick={() => handleAddToCart(user.cart_id, meal_id)}
                                      icon={ReceiptIcon}
                                    />
            } 
          </ButtonWrapper>

        </Details>

      </Content>

      <Footer />
    </Container>
  )
}
