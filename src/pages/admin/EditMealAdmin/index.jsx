import { Container, ButtonBack, ImageUpload, Category, Items, Hero, Name, Ingredients, Price, Description, Heading, ButtonWrapper } from "./styles"
import { Header } from "../../../components/Header"
import { Textarea } from "../../../components/TextArea"
import { Input } from "../../../components/Input"
import { ButtonText } from "../../../components/ButtonText"
import { Button } from "../../../components/Button"
import { IngredientItem } from "../../../components/IngredientItem"
import { Footer } from "../../../components/Footer"
import CarrotLeft from "../../../assets/icons/CaretLeft.svg"
import UploadIcon from "../../../assets/icons/Upload.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CurrencyInput } from 'react-currency-mask';
import { useParams } from "react-router-dom"


import { api } from "../../../services/api"

export function EditMealAdmin() {
  const [isButtonDisable, setIsButtonDisable] = useState(false)

  const [avatar, setAvatar] = useState()
  const [avatarPreview, setAvatarPreview] = useState()
  const [avatarFile, setAvatarFile] = useState(null)

  const [meal, setMeal] = useState({})

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");



  const navigate = useNavigate()

  const { meal_id } = useParams()

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
    setAvatarPreview(null)
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleEditMeal() { 
    if (!name) {
      return alert("Digite o nome do produto.")
    }

    if (!category) {
      return alert("Selecione a categoria do produto.")
    }

    if (!price) {
      return alert("Informe o preço do produto.")
    }

    if (!description) {
      return alert("Informe o preço do produto.")
    }

    if (newIngredient) {
      return alert("Voce deixou um ingrediente no campo para adicionar, mas nao clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    const response = await api.put(`/meals/${meal_id}`, {
      name,
      description,
      price,
      category,
      ingredients
    })

    if (avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);

      const responseAvatarUpload = await api.patch(`/meals/avatar/${meal_id}`, fileUploadForm);
    }

    alert("Produto editado com sucesso!")
    navigate("/")
  }

  function disableButton() {
    if (name && description && category && price && ingredients) {
      return false
    }
    return true
  }

  async function handleDeleteMeal(){
    await api.delete(`/meals/${meal_id}`)
    alert("Produto deletado com sucesso.")
    navigate("/")
  }

  useEffect(() => {
    setIsButtonDisable(disableButton())
  }, [name, description, category, price, ingredients])
 
  useEffect(() => {
    async function fetchMealDetails() {
      const response = await api.get(`/meals/${meal_id}`)
      setMeal(response.data)
      setName(response.data.name)
      setDescription(response.data.description)
      setPrice(response.data.price)
      const ingredientNames = response.data.ingredients.map((ingredient) => {
        return ingredient.name
      })
      setIngredients(ingredientNames)
      setAvatarPreview(response.data.avatar)
    }

    fetchMealDetails()
  }, [])

  return (
    <Container>
      <Header isAdmin />

      <Heading>
        <ButtonBack>
          <ButtonText
            title="voltar"
            icon={CarrotLeft}
            onClick={() => handleBack()}
          />
        </ButtonBack>

        <h1>Editar prato</h1>
      </Heading>

      {meal &&
        <Hero>

          <ImageUpload>
            <span>Imagem do prato</span>

            <label htmlFor="mealAvatar">
              <img src={UploadIcon} />
              <h2>Selecione imagem</h2>
              <img 
                className="mealImagePreview" 
                src={avatarPreview ? `${api.defaults.baseURL}/files/${avatarPreview}` : avatar } />
              <input
                id="mealAvatar"
                type="file"
                onChange={handleChangeAvatar}
              />
            </label>
          </ImageUpload>

          <Name>
            <span>Nome</span>
            <Input
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </Name>

          <Category>
            <span>Categoria</span>
            <select
              onChange={e => setCategory(e.target.value)}
            >
              <option>Seleciona a categoria</option>
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>

            </select>
          </Category>

          <Ingredients>
            <span>Ingredientes</span>
            
            <Items>
              {
              ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))
              }
              <IngredientItem
                isNew
                placeholder="Novo ingrediente"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </Items>
          </Ingredients>

          <Price>
            <span>Preço</span>
            <CurrencyInput
              className="priceInput"
              placeholder="R$ 0,00"
              onChangeValue={(
                event,
                originalValue,
                maskedValue
              ) => {
                setPrice(originalValue)
              }}
              value={price}
            />
          </Price>

          <Description>
            <span>Descrição</span>
            {meal.description &&
              <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={e => setDescription(e.target.value)}
              />
            }
          </Description>

          <ButtonWrapper>
            <Button
              title="Salvar alterações"
              onClick={() => handleEditMeal()}
              isDisable={isButtonDisable}
            />
            <Button
              title="Excluir prato"
              onClick={() => handleDeleteMeal()}
            />
          </ButtonWrapper>
        </Hero>
      }       
      
      <Footer />

    </Container>
  )
}