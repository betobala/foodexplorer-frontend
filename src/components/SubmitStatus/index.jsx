import { useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function SubmitStatus({ order, fetchUsersOrders }) {
  const [newOrderStatus, setNewOrderStatus] = useState(null)

  async function handleSubmitStatus(order_id, status) {
   
    const response = await api.patch(`/orders/${order_id}`, {
      status
    })

    setNewOrderStatus(null)
    fetchUsersOrders()
  }

  return (
    <Container>

      <select
        name={order.status}
        onChange={e => setNewOrderStatus(e.target.value)}
      >
        <option defaultValue={order.status} hidden>{order.status}</option>
        <option value="Pendente">Pendente</option>
        <option value="Preparando">Preparando</option>
        <option value="Entregue">Entregue</option>

      </select>
      {
        newOrderStatus != null &&
        <button
          className="submitStatus"
          onClick={() => handleSubmitStatus(order.order_id, newOrderStatus)}
        >
          Atualizar
        </button>
      }
    </Container>
  )
}