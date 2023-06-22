import { Container, Slogan, Section, HeaderWrapper, Meals, ControllerBoxLeft, ControllerBoxRight, FooterSection } from "./styles"
import SloganImage from "../../../assets/images/macaronPNG.png"
import { Header } from "../../../components/Header"
import { Item } from "../../../components/Item"
import { Footer } from "../../../components/Footer"
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useState, useEffect } from "react"
import { api } from "../../../services/api"


export function Home() {
  const [meals, setMeals] = useState([])
  const [carouselSize, setCarouselSize] = useState()

  const categoryMeal = meals.filter(meal => (meal.category == "meal"))
  const categoryDessert = meals.filter(meal => (meal.category == "dessert"))
  const categoryDrink = meals.filter(meal => (meal.category == "drink"))

  useEffect(() => {
    async function fetchMeals() {
      const response = await api.get("/meals?name&ingredients");
      setMeals(response.data);
    }

    fetchMeals();
  }, []);

  useEffect(() => {
    window.innerWidth >= 700 ? setCarouselSize(4) : setCarouselSize(2);
  }, [carouselSize])

  return(
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Slogan>
        <img src={SloganImage} />
        <div className="slogantext">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Slogan>

      <Section>
      <h2>Refeições</h2>
      </Section>

      <Meals>
         <ControllerBoxLeft>
           <Controller prev carouselId={"meal"} />
         </ControllerBoxLeft>

          {categoryMeal.length > 0 && (
            <Carousel gap="15px" itemCountPerPanel={carouselSize} customMode carouselId={"meal"}>
              {
                categoryMeal.map((meal) => (
                  <Item 
                    id={String(meal.id)}
                    key={String(meal.id)}
                    title={meal.name}
                    description={meal.description}
                    image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                    price={meal.price}
                  />
                  
                ))}
            </Carousel>

          )}
        {
          categoryMeal.length >= carouselSize && 
            <ControllerBoxRight>
              <Controller next carouselId={"meal"} />
            </ControllerBoxRight>
          }
        </Meals>

      <Section>
        <h2>Sobremesas</h2>
      </Section>
        
      <Meals>
          {categoryDessert.length > 0 && (
            <Carousel gap="16" itemCountPerPanel={carouselSize} customMode carouselId={"dessert"}>
              {
                categoryDessert.map((meal) => (
                  <Item 
                    id={String(meal.id)}
                    key={String(meal.id)}
                    title={meal.name}
                    description={meal.description}
                    image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                    price={meal.price}
                  />
                  
                ))}
            </Carousel>

          )}
        {
          categoryDessert.length >= carouselSize && 
            <>
          <ControllerBoxLeft>
            <Controller prev carouselId={"dessert"} />
          </ControllerBoxLeft>

          <ControllerBoxRight>
            <Controller next carouselId={"dessert"} />
          </ControllerBoxRight>
            </>
          }
        </Meals>

      <Section>
        <h2>Bebidas</h2>   
      </Section>

      <Meals>
      {categoryDrink.length > 0 && (
            <Carousel gap="16" itemCountPerPanel={carouselSize} customMode carouselId={"drink"}>
              {
                categoryDrink.map((meal) => (
                  <Item 
                    id={String(meal.id)}
                    key={String(meal.id)}
                    title={meal.name}
                    description={meal.description}
                    image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                    price={meal.price}
                  />
                  
                ))}
            </Carousel>

          )}
        {
          categoryDrink.length >= carouselSize && 
            <>
          <ControllerBoxLeft>
            <Controller prev carouselId={"drink"} />
          </ControllerBoxLeft>

          <ControllerBoxRight>
            <Controller next carouselId={"drink"} />
          </ControllerBoxRight>
            </>
          }
        </Meals>

        <FooterSection />
      
      <Footer />
    </Container>
  )
}

