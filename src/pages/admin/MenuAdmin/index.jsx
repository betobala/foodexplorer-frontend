import { Container, HeaderMenu, InputWrapper, Content, ButtonWrapper } from "./styles"
import CloseIcon from "../../../assets/icons/Close.svg"
import { IconButton } from "../../../components/IconButton"
import { Input } from "../../../components/Input"
import { ButtonText } from "../../../components/ButtonText"
import { Footer } from "../../../components/Footer"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/auth";

export function MenuAdmin() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleCloseMenu(){
    navigate(-1)
  }
  function handleOpenNewMeal(){
    navigate("/new")
  }
  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return(
    <Container>
      <HeaderMenu>
        <IconButton 
        icon={CloseIcon}
        onClick={() => handleCloseMenu()}
        />
        <span>Menu</span>
      </HeaderMenu>

      <ButtonWrapper>
        <ButtonText
         title="Novo Prato"
         onClick={() => handleOpenNewMeal()}
        />
      </ButtonWrapper>
      
      <ButtonWrapper>
        <ButtonText
         title="Sair"
         onClick={() => handleSignOut()}
        />
      </ButtonWrapper>

      <Content>

      </Content>

      <Footer />
      
    </Container>
  )
}

