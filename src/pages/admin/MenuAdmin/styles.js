import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  min-height: 100vh;
`
export const HeaderMenu = styled.div`
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};  

  display: flex;
  align-items: center;

  gap: 16px;

  img {
    width: 25px;

    margin: 65px 0px 24px 28px;
  }

  span {
    color: var(--light-light-100, #FFF);
    font-family: Roboto;
    font-size: 21.163px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin: 56px 28px 24px 0px;
  }
`

export const InputWrapper = styled.div`
  margin: 36px 32px;
  
`

export const Content = styled.div`
  height: 538px;

`
export const ButtonWrapper = styled.div`
  button {
      display: flex;

      width: 80%;
      margin: 0 32px;

      padding: 10px;
      

      color: var(--light-light-300, #E1E1E6);
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 140%;
      

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.COLORS.DARK_1000};
      
    }
`

