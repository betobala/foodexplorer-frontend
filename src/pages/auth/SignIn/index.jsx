import { Container, Hero, HeaderDesktop, InputWrapper, LogoWrapper, ButtonWrapper } from "./styles"
import { Logo } from "../../../components/Logo"
import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from '../../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  return(
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <Hero>

        <HeaderDesktop>
          <h1>Faça Login</h1> 
        </HeaderDesktop>

        <InputWrapper>
        
          <span>Email</span>
          <Input 
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />

          <span>Senha</span>
          <Input 
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
          
        </InputWrapper>

        <ButtonWrapper>
          <Button 
            title="Entrar"
            onClick={handleSignIn}
          />
          <Link to="/register">
            Criar uma conta
          </Link>
        </ButtonWrapper>

      </Hero>

    </Container>
  )
}

