import { Container, HeaderMenu, InputWrapper, Content, ButtonWrapper } from "./styles"
import CloseIcon from "../../../assets/icons/Close.svg"
import { IconButton } from "../../../components/IconButton"
import { Input } from "../../../components/Input"
import { ButtonText } from "../../../components/ButtonText"
import { Footer } from "../../../components/Footer"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/auth"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { useSearch } from "../../../hooks/search"

export function Menu({ isAdmin = false }) {
  const { signOut } = useAuth()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [totalOfProducts, setTotalOfProducts] = useState(0)


  async function fetchTotalOfProducts(cart_id) {
    const response = await api.get(`/carts/${cart_id}`)

    response.data.map((product) => (
      setTotalOfProducts(prevState => (prevState + 1))
    ))
  }

  function handleBack(){
    navigate(-1)
  }

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleOpenFavorites(){
    navigate("/favorites")
  }

  function handleOpenOrderHistory(){
    navigate("/history")
  }

  function handleOpenOrder(){
    navigate("/order")
  }


  useEffect(()=>{
    fetchTotalOfProducts(user.cart_id)
  }, [])

  return(
    <Container>
      <HeaderMenu>
        <IconButton
          onClick={() => handleBack()}
          icon={CloseIcon}
        />
        <span>Menu</span>
      </HeaderMenu>

      <InputWrapper>
        <Input
        isSearch
        placeholder="Busque por pratos ou ingredientes"
        />
      </InputWrapper>

      <ButtonWrapper>
        <ButtonText
          onClick={() => handleOpenOrder()}
          title={`Carrinho (${totalOfProducts})`}
        />     
        </ButtonWrapper>

      <ButtonWrapper>
        <ButtonText
          onClick={() => handleOpenOrderHistory()}
          title="Histórico de pedidos"
       />
      </ButtonWrapper>

      <ButtonWrapper>
        <ButtonText
          onClick={() => handleOpenFavorites()}
          title="Meus favoritos"
       />
      </ButtonWrapper>

      <ButtonWrapper>
        <ButtonText
          onClick={() => handleSignOut()}
          title="Sair"
       />
      </ButtonWrapper>

      <Content>

      </Content>

      <Footer />
      
    </Container>
  )
}

