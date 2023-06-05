import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, isActive = false , ...rest }){
  return (
    <Container
    type="button"
    isActive={isActive}
    {...rest}
    >
      <img src={Icon}/>
      {title}
    </Container>
  )
}