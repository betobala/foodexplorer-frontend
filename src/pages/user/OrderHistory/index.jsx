import { Container, Desktop, Title, StatusElipse, Mobile, Card } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"



export function OrderHistory() {
  const [userOrders, setUserOrders] = useState([])

  
  async function teste() {
    console.log(userOrders)
  }
  useEffect(() => {
    async function fetchUserOrders() {
      const response = await api.get("/orders")
      setUserOrders(response.data)
    }
    fetchUserOrders()
  }, [])


  return (
    <Container>
      <Header />

      <button onClick={() => teste()}>teste</button>
      <Title>
        {
          window.innerWidth >= 700 &&
          <h1>Histórico de pedidos</h1>
        }
        {
          window.innerWidth <= 699 &&
          <h1>Pedidos</h1>
        }
      </Title>
      {
        window.innerWidth >= 700 &&
        <Desktop>
          <thead>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e hora</th>
          </thead>
          <tbody>

            {/* {
              userOrders.map((order) => (
                <tr>
                  <StatusElipse>
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8.57812)" fill="#AB222E" />
                    </svg>

                    <span>Pendente</span>
                  </StatusElipse>
                  <td>00000004</td>
                  <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
                </tr>
              ))
            } */}
          </tbody>
        </Desktop>
      }

      {
        window.innerWidth <= 699 &&

        <Mobile>
          {/* {
            userOrders.map((order) => (
              <Card key={order.id}>
                <span>00004</span>
                <StatusElipse>
                  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8.57812)" fill="#AB222E" />
                  </svg>

                  <span>Pendente</span>
                </StatusElipse>
                <span>20/05 às 18h00</span>
                <span>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</span>
              </Card>
            ))
          } */}

        </Mobile>
      }


      <Footer />
    </Container>
  )
}
