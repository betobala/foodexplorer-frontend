import { Container, Content, Title } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useNavigate } from "react-router-dom"
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
        <thead>
          <th>Status</th>
          <th>Código</th>
          <th>Detalhamento</th>
          <th>Data e hora</th>
        </thead>
        <tbody>
          <tr>
            <td>Pendente</td>
            <td>00000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>Preparando</td>
            <td>00000003</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>Entregue</td>
            <td>00000002</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
        </tbody>
      </Content>

      <Footer />
    </Container>
  )
}
