import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const LogoWrapper = styled(Link)`
  @media(max-width: 1099px){
    img {
      width: 24px;
    }
  
    h1 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 22px;
      line-height: 25px;
    }
  }

  @media(min-width: 1100px){
    min-width: 200px;
    img {
      width: 30px;
    }
  
    h1 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }
  }
`
export const Mobile = styled.div`
  @media(min-width: 1100px){
    display: none;
  }
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 28px 24px;
`
export const Desktop = styled.div`
  @media(max-width: 1099px){
    display: none;
  }
  width: 100vw;
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;

  padding: 28px 123px;

  input {
    min-width: 100px;
    max-width: 100%;
    padding: 4px 10px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

  }
`

export const IconButtonWrapper = styled.div`
  @media(min-width: 1100px){
    display: none;
  }
`

export const NewMealButtonWrapper = styled.div`
  button {
    min-width: 150px;

  }

`
export const InputWrapper = styled.div`
  width: 524px;
  @media(max-width: 1250px){
      display: none;
  }
`