import { Container, Slogan, Section, HeaderWrapper, Meals, ControllerBoxLeft, ControllerBoxRight, Desktop, Mobile } from "./styles"
import SloganImage from "../../../assets/images/macaronPNG.png"
import { Header } from "../../../components/Header"
import { Item } from "../../../components/Item"
import { Footer } from "../../../components/Footer"
import { FooterSection } from "../../../components/FooterSection"
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useState, useEffect } from "react"
import { api } from "../../../services/api"


export function Home() {
  const [meals, setMeals] = useState([])
  const [carouselSize, setCarouselSize] = useState()

  const categoryMeal = meals.filter(meal => (meal.category == "meal"))
  const categoryDessert = meals.filter(meal => (meal.category == "dessert"))
  const categoryDrink = meals.filter(meal => (meal.category == "drink"))

  function setCarouselSizeByWindowWidth() {
    if (window.innerWidth <= 1280) {
      setCarouselSize(3)
      return
    }
    if (window.innerWidth <= 1750) {
      setCarouselSize(4)
      return
    }
    if (window.innerWidth <= 1920) {
      setCarouselSize(5)
      return
    }
  }

  useEffect(() => {
    async function fetchMeals() {
      const response = await api.get("/meals?name&ingredients");
      setMeals(response.data);
    }

    fetchMeals();
  }, []);

  useEffect(() => {
    setCarouselSizeByWindowWidth()

  }, [window.innerWidth])

  return (
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

      <Desktop>
        {categoryMeal.length > 0 &&
          <>
            <Section>
              <h2>Refeições</h2>
            </Section>

            <Meals>
              {
                categoryMeal.length > carouselSize &&

                <ControllerBoxLeft>
                  <Controller prev carouselId={"1"} />
                </ControllerBoxLeft>
              }

              <Carousel gap="4px" itemCountPerPanel={carouselSize} customMode carouselId={"1"}>
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


              {
                categoryMeal.length > carouselSize &&

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
                categoryDessert.length > carouselSize &&

                <ControllerBoxLeft>
                  <Controller prev carouselId={"2"} />
                </ControllerBoxLeft>
              }

              <Carousel gap="12" itemCountPerPanel={carouselSize} customMode carouselId={"2"}>
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


              {
                categoryDessert.length > carouselSize &&

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
                categoryDrink.length > carouselSize &&

                <ControllerBoxLeft>
                  <Controller prev carouselId={"3"} />
                </ControllerBoxLeft>
              }

              <Carousel gap="12" itemCountPerPanel={carouselSize} customMode carouselId={"3"}>
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

                  ))
                }
              </Carousel>


              {
                categoryDrink.length > carouselSize &&

                <ControllerBoxRight>
                  <Controller next carouselId={"3"} />
                </ControllerBoxRight>

              }
            </Meals>
          </>
        }
      </Desktop>

      <Mobile>
        {
          categoryMeal.length > 0 &&
          <>
            <Section>
              <h2>Refeições</h2>
            </Section>

            <Meals>
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

                ))
              }
            </Meals>
          </>
        }
        {
          categoryDessert.length > 0 &&
          <>
            <Section>
              <h2>Sobremesas</h2>
            </Section>

            <Meals>
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

                ))
              }
            </Meals>
          </>
        }
        {
          categoryDrink.length > 0 &&
          <>
            <Section>
              <h2>Bebidas</h2>
            </Section>

            <Meals>
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

                ))
              }
            </Meals>
          </>
        }
      </Mobile>

      <FooterSection />

      <Footer />
    </Container>
  )
}

