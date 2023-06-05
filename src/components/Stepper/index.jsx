import { Container } from "./styles";
import { useState } from "react";
import { IconButton } from "../IconButton";
import Minus from "../../assets/icons/Minus.svg"
import Plus from "../../assets/icons/Plus.svg"


export function Stepper({ quantity, setQuantity }){

    function IncrementItem(){
      setQuantity(prevState => (prevState + 1));
    }
    function DecreaseItem(){
      setQuantity(prevState => Math.max(0, (prevState - 1)));
    }

    function padWithLeadingZeros(num, totalLength) {
      return String(num).padStart(totalLength, '0');
    }

  return(
    <Container>
     
        <IconButton 
          onClick={() => DecreaseItem()}
          icon={Minus}
        />

        <h2>{padWithLeadingZeros(quantity, 2)}</h2>

        <IconButton 
          onClick={() => IncrementItem()}
          icon={Plus}
        />
        
      </Container>
    );
  }