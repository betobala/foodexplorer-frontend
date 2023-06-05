import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;

    margin: 56px 28px 24px 0px;
  }
`

export const InputWrapper = styled.div`
  margin: 36px 28px;
`

export const Content = styled.div`
  height: 538px;

`
export const ButtonWrapper = styled.div`
  button {
      display: flex;
      width: 100%;
      
      padding: 10px;
      padding-left: 20px;
     

      

      font-weight: 300;
      font-size: 24px;
      line-height: 34px;
      

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.COLORS.DARK_1000};
      
    }
`

