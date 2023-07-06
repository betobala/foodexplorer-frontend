import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`
export const HeaderWrapper = styled.div`
  width: 100%;
`
export const Slogan = styled.div`
  @media(max-width: 1099px){
    width: 95%;
    height: 120px;
    
    margin: 44px auto 62px;

    border-radius: 3px;

    display: flex;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

  img {
    width: 191px;
    height: 149px;

    position: relative;
    right: 27px;
    bottom: 30px;

    margin-right: -38px;
  }

  .slogantext {
    display: flex;
    flex-direction: column;
    gap: 3px;

    margin-top: 35px;

    h1 {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  }
  }

  @media(min-width: 1100px){
    display: flex;
    align-items: center;
    height: 260px;
    
    
    margin: 164px 124px 62px;

    border-radius: 8px;

    display: flex;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    img {
      width: 632px;
      height: 406px;

      position: relative;
      right: 55px;
      bottom: 75px;

      margin-right: -38px;
    }

    .slogantext {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      h1 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 40px;
      line-height: 56px;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 16px;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
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
    
    h2{
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