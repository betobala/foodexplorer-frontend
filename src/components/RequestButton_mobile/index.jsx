import { Container } from "./styles";
import RequestIcon from "../../assets/icons/Receipt.svg"

export function RequestButton_mobile({ requests }){
  return(
  <Container type="button">
    <img src={RequestIcon}/>
    {
      requests &&
      <h1>{requests}</h1>
    }
  </Container>
  )
}