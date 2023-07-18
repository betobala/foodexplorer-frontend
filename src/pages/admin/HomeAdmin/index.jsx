import { Container, Slogan, Section, HeaderWrapper, Meals, ControllerBoxLeft, ControllerBoxRight, Desktop, Mobile } from "./styles"
import SloganImage from "../../../assets/images/macaronPNG.png"
import { Header } from "../../../components/Header"
import { FooterSection } from "../../../components/FooterSection"
import { Item } from "../../../components/Item"
import { Footer } from "../../../components/Footer"
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { useState, useEffect } from "react"
import { api } from "../../../services/api"
import { motion } from "framer-motion"


export function HomeAdmin() {
  const [meals, setMeals] = useState([])
  const [carouselSize, setCarouselSize] = useState()
  const [categoryMeal, setCategoryMeal] = useState([])
  const [categoryDessert, setCategoryDessert] = useState([])
  const [categoryDrink, setCategoryDrink] = useState([])

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
      const response = await api.get("/meals?name&ingredients");
      setMeals(response.data);
      setCategoryMeal((response.data).filter(meal => (meal.category == "meal")))
      setCategoryDessert((response.data).filter(meal => (meal.category == "dessert")))
      setCategoryDrink((response.data).filter(meal => (meal.category == "drink")))
    }

    fetchMeals();
  }, []);

  useEffect(() => {
    setCarouselSizeByWindowWidth()

  }, [window.innerWidth])

  return (
    <Container>
      <HeaderWrapper>
        <Header isAdmin />
      </HeaderWrapper>

      <Slogan>
        <motion.img 
          initial={{opacity:0, x: -300}}
          animate={{opacity:1, x: 0}}
          transition={{duration: 0.9}}
          src={SloganImage} 
        />
        <motion.div 
          className="slogantext"
          initial={{opacity:0, x: -200}}
          animate={{opacity:1, x: 0}}
          transition={{duration: 0.9}}
        >
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </motion.div>
      </Slogan>

      <Desktop>
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
                      isAdmin
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
                      isAdmin
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
                      isAdmin
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
        {
          categoryMeal.length > 0 &&
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
                categoryMeal.map((meal, i) => (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      isAdmin
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
                categoryDessert.map((meal, i) => (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      isAdmin
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
                categoryDrink.map((meal, i) => (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i -1) * 0.1 }}
                    key={String(meal.id)}
                    >
                    <Item
                      isAdmin
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

