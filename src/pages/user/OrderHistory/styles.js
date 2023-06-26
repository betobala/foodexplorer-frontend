import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`
export const Title = styled.div`

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media(max-width: 699px){
    h1{
      margin: 56px 0 27px 35px;
    }
  } 

  @media(min-width: 700px){
    h1{
      margin: 34px 123px 32px 123px;
    }
  } 
`
