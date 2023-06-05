import { Container } from "./styles";

export function Button({ title, icon: Icon, isDisable = false, ...rest }){
  return(
  <Container
    type="button"
    disabled={isDisable}
    {...rest}
    >
      {
        Icon &&
        <img src={Icon}/>
      }
      {title}
  </Container>
  )
}