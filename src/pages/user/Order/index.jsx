import { Container, Content, Title } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../../hooks/auth"
import { api } from "../../../services/api"
import { CartItem } from "../../../components/CartItem"


export function Order() {
  const { user } = useAuth()
  const [cartProducts, setCartProducts] = useState([])
  const [cartId, setCartId] = useState()
  const [totalPrice, setTotalPrice] = useState(0)
  const navigate = useNavigate()


  function handleBack() {
    navigate(-1)
  }

  async function fetchCartProducts(cart_id) {
    const response = await api.get(`/carts/${cart_id}`)
    setCartProducts(response.data)
  }
  
  useEffect(() => {
    fetchCartProducts(cartId)

  }, [cartId])

  useEffect(() => {
    async function fetchCart() {
      const response = await api.get(`/carts`)
      setCartId(response.data.id)
    }
    fetchCart()
  }, [])

  useEffect(() => {
    setTotalPrice(0)
    cartProducts.map((product) => (
      setTotalPrice(prevState => (prevState + (product.price * product.number_of_products)))
    ))

  }, [cartProducts])

  return (
    <Container>
      <Header />

      <Title>
        <h1>Meu pedido</h1>
      </Title>

      <Content>
        {
          cartProducts.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              image={`${api.defaults.baseURL}/files/${product.avatar}`}
              quantity={product.number_of_products}
              name={product.name}
              price={product.price}
              fetchCartProducts={fetchCartProducts}
            />
          ))
        }
        {
          totalPrice > 0 &&
          <h3>{`Total: ${totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}</h3>
        }

      </Content>

      <Footer />
    </Container>
  )
}
