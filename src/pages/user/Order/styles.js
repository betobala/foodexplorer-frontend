import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
`

export const OrderProducts = styled.div`
  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 16px;
  }

  @media(max-width: 699px){
    display: flex;
    flex-direction: column;
    gap: 16px;
  
    margin: 0 35px 99px 35px;

    h1 {
      margin-top: 56px;
    }

  }

  @media(min-width: 700px){
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 123px 400px 123px;

    h1 {
      margin-top: 34px;
    }
  }
  
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
  }
`

export const Payment = styled.div`
  width: 530px;
  height: 445px;

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 34px;
  }

`
export const Tabs = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
height: 81px;
margin-top: 32px;

`
export const Pix = styled.button`
  width: 100%;
  height: 81px; 

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 28px;
  gap: 8px;

  border-width: 1px 0px 0px 1px;
  border-style: solid;
  border-color: #76797B;
  border-radius: 8px 0px 0px 0px;

  background: #0D161B;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
`
export const Credit = styled.button`
  width: 100%;
  height: 81px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 28px;
  gap: 8px;

  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #76797B;
  border-radius: 0px 8px 0px 0px;

  background: #0D161B;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
export const Content = styled.div`
  border: 1px solid #76797B;
  border-radius: 0px 0px 8px 8px;
  text-align: center;
  padding: 47px 91px;

  display: grid;
  grid-template-areas:  "number number"
                        "validity code"
                        "button button"
  ;
  row-gap: 37px;
  column-gap: 17px;

  button {
    grid-area: button;
  }
  h3 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: left;
    margin-bottom: 8px;
  }

`
export const CreditNumber = styled.div`
  grid-area: number;

`
export const CreditValidity = styled.div`
  grid-area: validity;

`
export const CreditCode = styled.div`
  grid-area: code;

`
export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 5px;
  color: white;
`