import styled from "styled-components";

export const Container = styled.div`
 

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media(max-width: 699px){
      width: 100%;
    }

`

export const ButtonBack = styled.div`
  @media(max-width: 699px){
    margin-top: 32px;
    margin-left: 56px;
    margin-bottom: 15px;

    button { 
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
    
      color: ${({ theme }) =>theme.COLORS.LIGHT_300};
    }
  }
  @media(min-width: 700px){
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
  @media(max-width: 699px){
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 56px 70px;
  }

  @media(min-width: 700px){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
    margin: 42px 121px 150px;
  }
`

export const Image = styled.div`
  @media(max-width: 699px){
    align-self: center;
    img {
    width: 264px;
    }
  }
  @media(min-width: 700px){
    img {
    width: 390px;
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 699px){
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

  @media(min-width: 700px){
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

  @media(max-width: 699px){
    display: flex;
    align-self: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  @media(min-width: 700px){
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`

export const ButtonWrapper = styled.div`
  @media(max-width: 699px){
    margin-top: 40px;
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
  @media(min-width: 700px){
    margin-top: 40px;
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
`