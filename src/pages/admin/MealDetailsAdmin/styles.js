import styled from "styled-components";

export const Container = styled.div`
position: relative;
  min-height: 100vh;

@media(max-width: 1100px){
    width: 100%;
  }

`

export const ButtonBack = styled.div`
  @media(max-width: 1100px){
    margin-top: 32px;
    margin-left: 56px;

    button { 
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
    
      color: ${({ theme }) =>theme.COLORS.LIGHT_300};
    }
  }
  @media(min-width: 1100px){
    margin: 24px 0 0 124px;

    button { 
      font-weight: 700;
      font-size: 24px;
      line-height: 34px;
    
      color: ${({ theme }) =>theme.COLORS.LIGHT_300};
    }
  }
`

export const Content = styled.div`
  @media(max-width: 1100px){
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 56px;
  }

  @media(min-width: 1100px){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
    margin: 42px 0;
    margin-left: 13%;
    margin-right: 13%;
  }
`

export const Image = styled.div`
  @media(max-width: 1100px){
    align-self: center;
    img {
    width: 264px;
    }
  }
  @media(min-width: 1100px){
    img {
    width: 390px;
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 1100px){
    align-items: center;
    h1 {
      text-align: center;

      font-weight: 500;
      font-size: 27.0412px;
      line-height: 140%;

      color: ${({ theme }) =>theme.COLORS.LIGHT_300};
    }

    p {
      margin-top: 24px;
      text-align: center;

      font-weight: 400;
      font-size: 16px;
      line-height: 140%;

      color: ${({ theme }) =>theme.COLORS.LIGHT_300};
    }
  }

  @media(min-width: 1100px){
    h1 {
      text-align: start;

      font-weight: 500;
      font-size: 40px;
      line-height: 140%;

      color: ${({ theme }) =>theme.COLORS.LIGHT_300};
    }

    p {
      margin-top: 24px;
      text-align: start;

      font-weight: 400;
      font-size: 24px;
      line-height: 140%;

      color: ${({ theme }) =>theme.COLORS.LIGHT_300};
    }
  }
`
export const Tags = styled.div`
  margin-top: 24px;

  @media(max-width: 1100px){
    display: flex;
    align-self: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  @media(min-width: 1100px){
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`

export const ButtonWrapper = styled.div`
  @media(max-width: 1100px){
    margin-top: 48px;
    margin-bottom: 54px;

    width: 316px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    img {
      width: 18px;
    }
  }

  @media(min-width: 1100px){
    margin-top: 48px;
    margin-bottom: 54px;

    width: 131px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 33px;

    img {
      width: 18px;
    }
  }
`