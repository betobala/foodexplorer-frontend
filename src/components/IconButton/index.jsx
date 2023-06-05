import { useState } from "react";
import { Container } from "./styles";

export function IconButton({ icon: Icon, requests, ...rest }){

  

  return(
  <Container
   type="button"
   {...rest}
  >
    <img src={Icon}/>
  </Container>
  )
}