import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  

  position: relative;
  min-height: 100vh;

`

export const Hero = styled.div`
  display: flex;
  margin: 0 auto;
  
  
  @media(max-width: 1100px){
    flex-direction: column;
    margin-top: 56px;
    min-height: 700px;
  }

  @media(min-width: 1100px){
    flex-direction: row;
    margin-top: 34px;
    gap: 20vw;
    margin-top: 34px;
    min-height: 900px;
  }

`

export const OrderProducts = styled.div`

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 16px;
  }

  h4 {
    font-size: 20px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 160%;
    margin-bottom: 47px;
  }
  

  @media(max-width: 1100px){
    display: flex;
    flex-direction: column;
    gap: 16px;
  
    margin: 0 35px;
  }

  @media(min-width: 1100px){
    display: flex;
    flex-direction: column;
    gap: 16px;  
    min-width: 280px;
  }
  
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
  }
`
export const NextMobileButton = styled.div`
  button {
      margin-bottom: 120px;
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
  }

  @media(max-width: 1100px){
    max-width: 90vw;
    margin: 0 auto;

  }

  @media(min-width: 1100px){
    width: 530px;
    height: 445px;
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

  background-color: ${(props) => props.active ? "#0D161B" : "transparent"};

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

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
`

export const Credit = styled(Pix)`

  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #76797B;
  border-radius: 0px 8px 0px 0px;
  
`

export const Content = styled.div`
`

export const PixContent = styled.div`
  border: 1px solid #76797B;
  border-radius: 0px 0px 8px 8px;
  text-align: center;
  @media(min-width: 1100px){
    padding: 47px 91px;

  }
  @media(max-width: 1100px){
    svg {
      width: 167px;
    }
  }
`

export const CreditContent = styled.div`
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

  @media(max-width: 1100px){
    padding: 50px 20px;
  }
`

export const CreditNumber = styled.div`
  grid-area: number;

`

export const CreditValidity = styled.div`
  grid-area: validity;
  input{

    ::-webkit-datetime-edit-text { 
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
     }
    ::-webkit-datetime-edit-month-field { 
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
     }
    ::-webkit-datetime-edit-day-field { 
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
     }
    ::-webkit-datetime-edit-year-field { 
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
     }
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

`

export const CreditCode = styled.div`
  grid-area: code;

`

export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 5px;
  color: white;
`
export const WaitingPayment = styled(PixContent)`
  display: flex;
  flex-direction: column;
  gap: 37px;
  align-items: center;
  padding: 59 91px;

  svg {
    width: 128px;
  }

  svg, path {
    fill: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  h3 {
    font-size: 20px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    text-align: center;
  }

  @media(max-width: 1100px){
    padding: 105px 20px;
    gap: 24px;
    svg {
      width: 65px;
    }
  }
`
export const PaymentApproved = styled(WaitingPayment)`
`
export const OrderDelivered = styled(WaitingPayment)`
`