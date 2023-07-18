import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  @media(max-width: 1100px){
    gap: 12px;
    width: 180px;
    
    button {
      margin-top: 4px;
    }
  }

  @media(min-width: 1100px){
    width: 300px;
    gap: 15px;

  }
`

export const FavoriteIcon = styled.div`
  img {
    width: 24px;
  }
  @media(max-width: 1100px){
    position: relative;
    left: 65px;
    top: 40px;
  
  }
  @media(min-width: 1100px){
    position: relative;
    left: 118px;
    top: 40px;
  
  }
`

export const PencilIcon = styled.div`
  img {
    width: 20px;
  }
  @media(max-width: 1100px){
    position: relative;
    left: 65px;
    top: 40px;
  }
  @media(min-width: 1100px){
    position: relative;
    left: 118px;
    top: 40px;
  }
`

export const ItemImage = styled(Link)`
  @media(max-width: 1100px){
      img {
      width: 88px;
      } 
  }
  @media(min-width: 1100px){
      img {
      width: 176px;
      } 
  }
`

export const ItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media(max-width: 1100px){
    width: 140px;
    text-align: center;
    
    h1 {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      
    }
    img {
    width: 6px;
    } 
  }
  @media(min-width: 1100px){
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
    }
    img {
    width: 8px;
    } 
  }

`
export const Description = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 43px;
    max-width: 240px;
    

  @media(max-width: 1100px){
    display: none;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
  }
`

export const Price = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.CAKE_100};

  @media(max-width: 1100px){
    h2 {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
    }
  }
  @media(min-width: 1100px){
    h2 {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 32px;
      line-height: 160%;  
    }
  }
`

export const ButtonWrapper = styled.div`
  @media(max-width: 1100px){
    width: 162px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    > button {
      padding: 4px 10px
    }
  }
  
  @media(min-width: 1100px){
    width: 208px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`