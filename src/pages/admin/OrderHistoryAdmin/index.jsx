import { Container, Desktop, Title, StatusElipse, Mobile, Card, StatusElipseMobile } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import moment from "moment/moment"
import { Button } from "../../../components/Button"
import { SubmitStatus } from "../../../components/SubmitStatus"



export function OrderHistoryAdmin() {
  const [userOrders, setUserOrders] = useState([])


  function statusColor(status) {
    if (status === "Pendente")
      return "#AB222E"
    if (status === "Preparando")
      return "#FBA94C"
    if (status === "Entregue")
      return "#04D361"
  }

  async function fetchUsersOrders() {
    const response = await api.get("/orders/admin")
    setUserOrders(response.data)
  }

  useEffect(() => {
    fetchUsersOrders()
  }, [])


  return (
    <Container>
      <Header isAdmin />

      <Title>
        {
          window.innerWidth >= 1100 &&
          <h1>Histórico de pedidos</h1>
        }
        {
          window.innerWidth <= 1099 &&
          <h1>Pedidos</h1>
        }
      </Title>

      {
        window.innerWidth >= 1100 &&
        <Desktop>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>

            {
              userOrders.map((order) => (
                <tr key={order.order_id}>
                  <StatusElipse>
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8.57812)" fill={statusColor(order.status)} />
                    </svg>

                    <SubmitStatus order={order} fetchUsersOrders={fetchUsersOrders()} />
                  </StatusElipse>
                  <td>{String(order.order_id).padStart(8, "0")}</td>

                  <td className="products">{order.products.map((product, index) =>
                    <div key={index}>
                      <span>{`${product.number_of_products}x ${product.name}`}</span>
                      <span className="comma">{`,         `}</span>
                    </div>
                  )}
                  </td>
                  <td>{moment(`${order.date}+00:00`).format("DD/MM HH:mm")}</td>
                </tr>
              ))
            }
          </tbody>
        </Desktop>
      }

      {
        window.innerWidth <= 1099 &&

        <Mobile>
          {
            userOrders.map((order) => (
              <Card key={order.order_id}>
                <span>{String(order.order_id).padStart(6, "0")}</span>
                <span>{moment(`${order.date}+00:00`).format("DD/MM HH:mm")}</span>
                <span className="products">{order.products.map((product, index) =>
                  <div key={index}>
                    <span>{`${product.number_of_products}x ${product.name}`}</span>
                    <span className="comma">{`,         `}</span>
                </div>
                )}</span>
                <div className="status">
                  <StatusElipseMobile>
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8.57812)" fill={statusColor(order.status)} />
                    </svg>
                  </StatusElipseMobile>
                  <SubmitStatus order={order} fetchUsersOrders={fetchUsersOrders()} />
                </div>
              </Card>
            ))
          }

        </Mobile>
      }


      <Footer />
    </Container>
  )
}
