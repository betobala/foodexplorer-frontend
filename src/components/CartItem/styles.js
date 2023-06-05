import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-column-gap: 13px;
  grid-template-columns: 72px;
  grid-template-areas: "image nameprice"
                       "image button";
`
export const MealImage = styled.div`
  grid-area: image;

  img {
    width: 72px;
  }
`
export const NamePrice = styled.div`
  grid-area: nameprice;
  display: flex;
  align-items: center;
  gap: 10px;

  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) =>theme.COLORS.LIGHT_400};
  }
`

export const ButtonWrapper = styled.div`
  grid-area: button;
  
  button {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) =>theme.COLORS.TOMATO_400};
  }
`