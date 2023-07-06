import styled from "styled-components";

export const Container = styled.div`
@media (max-width: 699px) { //mobile
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 0 auto;
}

@media (min-width: 700px) { //desktop
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
  margin-top: 10vh;

}

`
export const Hero = styled.div`
  @media (max-width: 699px) { //mobile
    width: 316px;

    }

  @media (min-width: 700px) { //desktop
    padding: 64px;
    background-color: ${({ theme }) =>theme.COLORS.DARK_700};
    border-radius: 16px;

  }

`


export const HeaderDesktop = styled.div`
@media (max-width: 699px) {
  display: none;
}

h1 {
  font-weight: 500;
  font-size: 32px;
  line-height: 140%;
  
  text-align: center;
}

`

export const LogoWrapper = styled.div`
  margin-top: 138px;

  img {
    width: 43px;
  }
 @media(max-width: 1100px) {
    h1 {
      font-weight: 700;
      font-size: 37px;
      line-height: 43px;
    }
 }

  @media(min-width: 1100px) {
    position: relative;
    bottom: 105px;

    h1 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 42px;
      line-height: 49px;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    
    color: ${({ theme }) =>theme.COLORS.LIGHT_400};
  }
  
  span:nth-child(1){
    margin-top: 73px;
  }

  span:nth-child(3){
      margin-top: 32px;
  }

  @media (max-width: 699px) { //mobile

  }

  @media (min-width: 700px) { //desktop

  }

`

export const ButtonWrapper = styled.div`


  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin-top: 32px;
  
  @media (max-width: 699px) {

  }

  @media (min-width: 700px) {
    margin-bottom: 0;
    width: 348px;
  }
`