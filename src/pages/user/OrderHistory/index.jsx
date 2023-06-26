import { Container, Content, Title } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../../hooks/auth"
import { api } from "../../../services/api"
import { FavoritedItem } from "../../../components/FavoritedItem"


export function OrderHistory() {




  return (
    <Container>
      <Header />

      <Title>
        <h1>Histórico de pedidos</h1>
      </Title>

      <Content>
        
      </Content>

      <Footer />
    </Container>
  )
}
