import { Container, Section, HeaderWrapper, Meals, ControllerBoxLeft, ControllerBoxRight, Desktop, Mobile, Results } from "./styles"
import { Header } from "../../../components/Header"
import { Item } from "../../../components/Item"
import { Footer } from "../../../components/Footer"
import { FooterSection } from "../../../components/FooterSection"
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useState, useEffect } from "react"
import { api } from "../../../services/api"
import { useSearch } from "../../../hooks/search"
import { motion } from "framer-motion"


export function SearchResults() {
  const [carouselSize, setCarouselSize] = useState()
  const [categoryMeal, setCategoryMeal] = useState([])
  const [categoryDessert, setCategoryDessert] = useState([])
  const [categoryDrink, setCategoryDrink] = useState([])

  const { meals, searchName } = useSearch()

  function setCarouselSizeByWindowWidth() {
    if (window.innerWidth <= 1280) {
      setCarouselSize(3)
      return
    }
    if (window.innerWidth <= 1750) {
      setCarouselSize(4)
      return
    }
    if (window.innerWidth >= 1751) {
      setCarouselSize(5)
      return
    }
  }

  useEffect(() => {
    async function fetchMeals() {
      setCategoryMeal((meals).filter(meal => (meal.category == "meal")))
      setCategoryDessert((meals).filter(meal => (meal.category == "dessert")))
      setCategoryDrink((meals).filter(meal => (meal.category == "drink")))
    }

    fetchMeals();
  }, [meals]);

  useEffect(() => {
    setCarouselSizeByWindowWidth()

  }, [window.innerWidth])

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Desktop>
        {meals.length > 0  ?
          <Results>
            <h1>{`Resultados encontrados por: ${searchName}`}</h1>
          </Results>
          :
          <Results>
             <h1>{`Nenhum resultado encontrado por: ${searchName}`}</h1>
          </Results>
        }
        {categoryMeal.length > 0 &&
          <>
            <Section>
              <motion.h2
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Refeições
              </motion.h2>
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
                  categoryMeal.map((meal, i) => (
                    <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      id={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />
                    </motion.div>
             
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
            <motion.h2
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Sobremesas
              </motion.h2>
            </Section>

            <Meals>
              {
                categoryDessert.length > carouselSize &&

                <ControllerBoxLeft>
                  <Controller prev carouselId={"2"} />
                </ControllerBoxLeft>
              }

              <Carousel gap="4px" itemCountPerPanel={carouselSize} customMode carouselId={"2"}>
                {
                  categoryDessert.map((meal, i) => (
                    <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      id={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />
                  </motion.div>

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
            <motion.h2
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Bebidas
              </motion.h2>
            </Section>

            <Meals>
              {
                categoryDrink.length > carouselSize &&

                <ControllerBoxLeft>
                  <Controller prev carouselId={"3"} />
                </ControllerBoxLeft>
              }

              <Carousel gap="4px" itemCountPerPanel={carouselSize} customMode carouselId={"3"}>
                {
                  categoryDrink.map((meal, i) => (
                    <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      id={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />
                  </motion.div>

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
        {meals.length > 0  ?
          <Results>
            <h1>{`Resultados encontrados por: ${searchName}`}</h1>
          </Results>
          :
          <Results>
            <h1>{`Nenhum resultado encontrado por: ${searchName}`}</h1>
          </Results>
        }
        {
          categoryMeal.length > 0 &&
          <>
            <Section>
              <h2>Refeições</h2>
            </Section>

            <Meals>
              {
                categoryMeal.map((meal, i) => (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      id={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />
                  </motion.div>
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
                categoryDessert.map((meal, i) => (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      id={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />
                  </motion.div>

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
                categoryDrink.map((meal, i) => (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      id={String(meal.id)}
                      title={meal.name}
                      description={meal.description}
                      image={`${api.defaults.baseURL}/files/${meal.avatar}`}
                      price={meal.price}
                    />
                  </motion.div>

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

