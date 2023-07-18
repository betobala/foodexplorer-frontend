import styled from "styled-components";

export const Container = styled.div`
  grid-area: category;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 1099px){
    flex-direction: row;
    button {
      padding: 0 10px;
    }
  }

  select {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 5px;
      padding: 5px 40px 5px 5px;
      border: none;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;


      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      appearance: none;
      background-image: url("../../../../images/ArrowDown.png");
      background-repeat: no-repeat;
      background-position: right 0.7rem top 50%;
      background-size: 0.65rem auto;
    }
    
    .submitStatus {
      text-align: center;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      
      border-radius: 5px;

      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      border: none;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      }

      &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }

`
