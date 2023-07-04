import { Container } from "./styles";
import RequestIcon from "../../assets/icons/Receipt.svg"

export function RequestButton_mobile({ requests = null }) {
  return (
    <Container
      type="button"
      to="/order"
    >
      <img src={RequestIcon} />
      {
        requests &&
        <span>{requests}</span>
      }
    </Container>
  )
}