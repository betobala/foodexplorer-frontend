import { Container, HeaderMenu, InputWrapper, Content, ButtonWrapper } from "./styles"
import CloseIcon from "../../../assets/icons/Close.svg"
import { IconButton } from "../../../components/IconButton"
import { Input } from "../../../components/Input"
import { ButtonText } from "../../../components/ButtonText"
import { Footer } from "../../../components/Footer"

export function Menu({ isAdmin = false }) {

  return(
    <Container>
      <HeaderMenu>
        <IconButton icon={CloseIcon}/>
        <span>Menu</span>
      </HeaderMenu>

      <InputWrapper>
        <Input
        isSearch
        placeholder="Busque por pratos ou ingredientes"
        />
      </InputWrapper>

      <ButtonWrapper>
        <ButtonText title="Sair" />
      </ButtonWrapper>

      <Content>

      </Content>

      <Footer />
      
    </Container>
  )
}

