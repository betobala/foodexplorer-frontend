import { Container, Slogan, Section, HeaderWrapper, Meals, ControllerBoxLeft, ControllerBoxRight, FooterSection } from "./styles"
import SloganImage from "../../../assets/images/macaronPNG.png"
import { Header } from "../../../components/Header"
import { Item } from "../../../components/Item"
import { Footer } from "../../../components/Footer"
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useState, useEffect } from "react"
import { api } from "../../../services/api"


export function HomeAdmin() {
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

  return (
    <Container>
      <HeaderWrapper>
        <Header isAdmin />
      </HeaderWrapper>

      <Slogan>
        <img src={SloganImage} />
        <div className="slogantext">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Slogan>

      {categoryMeal.length > 0 &&
        <>
          <Section>
            <h2>Refeições</h2>
          </Section>

          <Meals>
          {
              categoryMeal.length >= carouselSize &&
              
                <ControllerBoxLeft>
                  <Controller prev carouselId={"1"} />
                </ControllerBoxLeft>
          }
             
              <Carousel gap="16" itemCountPerPanel={carouselSize} customMode carouselId={"1"}>
                {
                  categoryMeal.map((meal) => (
                    <Item
                      isAdmin
                      id={String(meal.id)}
                      key={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />

                  ))}
              </Carousel>

            
            {
              categoryMeal.length >= carouselSize &&
              
                <ControllerBoxRight>
                  <Controller next carouselId={"1"} />
                </ControllerBoxRight>
             
            }
          </Meals>
        </>
      }

      {categoryDessert.length > 0 &&
        <>
          <Section>
            <h2>Sobremesas</h2>
          </Section>

          <Meals>
          {
              categoryMeal.length >= carouselSize &&
              
                <ControllerBoxLeft>
                  <Controller prev carouselId={"2"} />
                </ControllerBoxLeft>
          }
             
              <Carousel gap="16" itemCountPerPanel={carouselSize} customMode carouselId={"2"}>
                {
                  categoryDessert.map((meal) => (
                    <Item
                      isAdmin
                      id={String(meal.id)}
                      key={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />

                  ))}
              </Carousel>

            
            {
              categoryDessert.length >= carouselSize &&
            
                <ControllerBoxRight>
                  <Controller next carouselId={"2"} />
                </ControllerBoxRight>
             
            }
          </Meals>
        </>
      }

      {categoryDrink.length > 0 &&
        <>
          <Section>
            <h2>Bebidas</h2>
          </Section>

          <Meals>
          {
              categoryMeal.length >= carouselSize &&
              
                <ControllerBoxLeft>
                  <Controller prev carouselId={"3"} />
                </ControllerBoxLeft>
          }
             
              <Carousel gap="16" itemCountPerPanel={carouselSize} customMode carouselId={"3"}>
                {
                  categoryDrink.map((meal) => (
                    <Item
                      isAdmin
                      id={String(meal.id)}
                      key={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />

                  ))}
              </Carousel>

            
            {
              categoryDrink.length >= carouselSize &&
              
                <ControllerBoxRight>
                  <Controller next carouselId={"3"} />
                </ControllerBoxRight>
            
            }
          </Meals>
        </>
      }
      
      <FooterSection />

      <Footer />
    </Container>
  )
}

