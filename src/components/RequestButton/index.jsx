import { Container } from "./styles";
import Receipt from "../../assets/icons/Receipt.svg"

export function RequestButton({ requests = 0, ...rest }){
  return(
  <Container
   type="button"
   {...rest}
  >
    <img src={Receipt}/>
    {`Pedidos (${requests})`}
  </Container>
  )
}