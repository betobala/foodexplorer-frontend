import { Container } from "./styles.js"
import Search from "../../assets/icons/Search.svg"

export function Input({ icon: Icon, isSearch = false, border = false, ...rest }) {
  return (
    <Container>
      {isSearch ? <img src={Search} /> : <></>}
      <input {...rest} />
    </Container>
  )
}