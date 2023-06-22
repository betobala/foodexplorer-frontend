import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  @media(max-width: 699px) {
  
  }

  @media(min-width: 700px) {
   
  }
`
export const HeaderWrapper = styled.div`
  width: 100%;
`
export const Slogan = styled.div`
  @media(max-width: 699px){
    width: 376px;
    height: 120px;
    
    margin: 44px auto 62px auto;

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

  @media(min-width: 700px){
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
  overflow-x: hidden;
  
  @media(max-width: 699px){
    gap: 20px;
    margin: 0 24px 24px
  }

  @media(min-width: 700px){
    margin: 0 123px 46px;
    gap: 55px;
    
  }

`
export const Section = styled.div`

  @media(max-width: 699px){
    margin: 0 24px;

    h2 {
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  @media(min-width: 700px){
    margin: 0 123px;

    h2{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

    }
  }
`
export const ControllerBoxLeft = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  position: relative;

  @media(max-width: 699px){
    margin-right: -40px;
  }
  @media(min-width: 700px){
    margin-right: -70px;
  }
  
`
export const ControllerBoxRight = styled.div`
  display: flex;
  justify-content: center;  
  position: relative;
  
  @media(max-width: 699px){
    margin-left: -60px;
  }
  @media(min-width: 700px){
    margin-left: -130px;
  }
`
export const FooterSection = styled.div`
  @media(max-width: 699px){
    padding-bottom: 90px;
  }
  @media(min-width: 700px){
    padding-bottom: 150px;
  }
`