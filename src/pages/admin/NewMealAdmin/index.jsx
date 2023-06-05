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


import { api } from "../../../services/api"

export function NewMealAdmin() {
  const [isButtonDisable, setIsButtonDisable] = useState(false)

  const [avatar, setAvatar] = useState()
  const [avatarFile, setAvatarFile] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate()

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
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

  async function handleNewMeal() {
    if (!avatar) {
      return alert("Insira a imagem do produto.")
    }

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

    const response = await api.post("/meals", {
      name,
      description,
      price,
      category,
      ingredients
    })

    if(avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);

      const responseAvatarUpload = await api.patch(`/meals/avatar/${response.data.meal_id}`, fileUploadForm);
    }

    alert("Produto cadastrado com sucesso!")
    navigate("/")
  }

  function disableButton(){
    if(name && avatar && description && category && price && ingredients){
      return false
    }
    return true
  }

  useEffect(() => {
    setIsButtonDisable(disableButton())
  }, [name,avatar,description,category,price,ingredients])

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

        <h1>Novo prato</h1>
      </Heading>

      <Hero>

        <ImageUpload>
          <span>Imagem do prato</span>

          <label htmlFor="mealAvatar">
            <img src={UploadIcon}/>
            <h2>Selecione imagem</h2>
            <img className="mealImagePreview" src={avatar}/>
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
          <Textarea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}
           />
        </Description>

        <ButtonWrapper>
          <Button
            title="Salvar alterações"
            onClick={handleNewMeal}
            isDisable = {isButtonDisable}
          />
        </ButtonWrapper>
      </Hero>

      <Footer />

    </Container>
  )
}