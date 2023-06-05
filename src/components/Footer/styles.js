import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  padding: 24px 28px;
  height: 77px;

  @media(min-width: 700px){
    padding: 24px 123px;
  }

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  img {
    width: 18px;

    @media(min-width: 700px){
    width: 30px;
  }
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15.2616px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    
    @media(min-width: 700px){
      font-size: 24px;
      line-height: 28px;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }


  p {
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    text-align: right;
    color: ${({ theme }) => theme.COLORS.LIGHT_200}
  }


`
