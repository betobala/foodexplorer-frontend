import { Container, MealImage, NamePrice, ButtonWrapper } from "./styles";
import { ButtonText } from "../ButtonText";
import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function CartItem({ image: Image, quantity, name, price, id, fetchCartProducts }){
  const [cartId, setCartId] = useState()
  
  
  async function deleteProduct(){
    const response = confirm("Tem certeza que deseja excluir este produto?")
    
    if(response){
      api.delete(`/carts/${id}`)
     fetchCartProducts(cartId)
 
     return alert("Item excluído com sucesso.")
    }
      
  }

  useEffect(() => {
    async function fetchCart() {
      const response = await api.get(`/carts`)
      setCartId(response.data.id)
    }
    fetchCart()
  }, [])

  return(
  <Container>
    <MealImage>
      <img src={Image}/>
    </MealImage>

    <NamePrice>
      <h3>{`${quantity}x ${name}`}</h3>
      <p>{`${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}</p>
    </NamePrice>

    <ButtonWrapper>
      <ButtonText
        onClick={() => deleteProduct()}
        title="excluir"/>
    </ButtonWrapper>

  </Container>
  )
}