import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`
export const HeaderWrapper = styled.div`
  width: 100%;
`
export const Results = styled.div`
  @media(max-width: 1099px){
    margin: 44px auto 62px;
    h1 {
      font-weight: 500;
      font-style: normal;
      font-size: 18px;
      line-height: 25px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    
  }
  @media(min-width: 1100px){
    margin: 44px auto 62px;
    h1 { 
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
    }
    
  }
`
export const Meals = styled.div`
  
  display: flex;
  align-items: center;
  margin-bottom: 47px;
  
  @media(max-width: 1099px){
    overflow-x: auto;
    margin-bottom: 24px;
  }

`
export const Section = styled.div`

  @media(max-width: 1099px){
    h2 {
      font-weight: 500;
      font-style: normal;
      font-size: 18px;
      line-height: 25px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  @media(min-width: 1100px){
    
    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
    }
  }
`
export const ControllerBoxLeft = styled.div`
  position: relative;
  
`

export const ControllerBoxRight = styled.div`
  position: relative;
`

export const Desktop = styled.div`
  @media(max-width: 1099px){
    display: none;
  }
  margin: 0 124px;
`

export const Mobile = styled.div`
@media(min-width: 1100px){
    display: none;
  }

  @media(min-width: 650px){
    margin: 0 72px;
  }
  margin: 0 24px;
`