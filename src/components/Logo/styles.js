import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  @media(max-width: 699px){
    h1 {
      font-family: 'Roboto';
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  @media(min-width: 700px){
    h1 {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    h2 {
      position: absolute;
      top: 65px;
      left: 290px;

      color: ${({ theme }) => theme.COLORS.CAKE_100};

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
    }
  }
`