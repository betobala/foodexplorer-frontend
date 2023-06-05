import { Container } from "./styles";
import LogoPolygon from "../../assets/icons/Logo-polygon.svg"
import PolygonFooter from "../../assets/icons/PolygonFooter.svg"

export function Logo({ isAdmin = false, footer = false }){
  return(
  <Container>
    {footer ? <img src={PolygonFooter}/> : <img src={LogoPolygon}/>}
    
    <h1>food explorer</h1>
    
    {isAdmin ? <h2>admin</h2> : <p></p>}

  </Container>
  )
}