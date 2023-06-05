import { Container, Hero, HeaderDesktop, InputWrapper, LogoWrapper, ButtonWrapper } from "./styles"
import { Logo } from "../../../components/Logo"
import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { ButtonText } from "../../../components/ButtonText"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from "../../../services/api"


export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate(-1)
    })
    .catch((error => {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível cadastrar")
      }
    }))
  }

  function handleBack(){
    return navigate(-1)
  }

  return(
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <Hero>

        <HeaderDesktop>
            <h1>Crie sua conta</h1> 
        </HeaderDesktop>

        <InputWrapper>
          <span>Seu nome</span>
          <Input 
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        
          <span>Email</span>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />

          <span>Senha</span>
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button 
            title="Criar conta"
            onClick={handleSignUp}
          />
          <ButtonText 
            title="Já tenho uma conta"
            onClick={handleBack}
          />
        </ButtonWrapper>

      </Hero>

    </Container>
  )
}

