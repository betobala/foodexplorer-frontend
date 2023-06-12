import { Container, HeaderMenu, InputWrapper, Content, ButtonWrapper } from "./styles"
import CloseIcon from "../../../assets/icons/Close.svg"
import { IconButton } from "../../../components/IconButton"
import { Input } from "../../../components/Input"
import { ButtonText } from "../../../components/ButtonText"
import { Footer } from "../../../components/Footer"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/auth"

export function Menu({ isAdmin = false }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleSignOut() {
    navigate("/")
    signOut()
  }

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

