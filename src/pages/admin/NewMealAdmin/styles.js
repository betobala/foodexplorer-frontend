import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  @media(max-width: 1100px){
    width: 100%;
  }

`
export const Heading = styled.div`
    @media(max-width: 1100px){
      margin: 12px 32px 0;
  
      h1 {
        margin-top: 24px;
        margin-bottom: 40px;
  
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
  
      button {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  
    @media(min-width: 1100px){
      margin: 12px 123px 0;
  
      h1 {
        margin-top: 24px;
        margin-bottom: 32px;
  
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
  
      button {
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
`
export const Hero = styled.form`
 
  @media(max-width: 1100px){
    margin: 0 32px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    label {
      display: flex;
      align-items: center;

      gap: 8px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 12px 32px;

      cursor: pointer;

      input {
        display: none;
      }
      h2 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  @media(min-width: 1100px){
    margin: 0 123px;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto auto;
    grid-gap: 32px;
    grid-template-areas: "image name category"
                          "ingred ingred price"
                          "desc desc desc"
                          "buttons buttons buttons"
  }
`
export const ButtonBack = styled.div`
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

`
export const ButtonWrapper = styled.div`
  grid-area: buttons;

  button {
    width: 200px;
    padding: 10px 0;

    margin-bottom: 53px;
    
    @media(max-width: 1100px){
      width: 100%;
    }
  }
`
export const ImageUpload = styled.div`
  grid-area: image;
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
      display: flex;
      align-items: center;

      gap: 8px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 10px 32px;
      border-radius: 8px;

      cursor: pointer;

     
      .mealImagePreview{
        max-width: 70px;
      }
      input {
        display: none;
      }
      h2 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
`
export const Category = styled.div`
  grid-area: category;
  display: flex;
  flex-direction: column;
  gap: 16px;

  select {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 5px;
      padding: 10px 54px 10px 16px;
      border: none;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;


      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      appearance: none;
      background-image: url("../../../../images/ArrowDown.png");
      background-repeat: no-repeat;
      background-position: right 0.7rem top 50%;
      background-size: 0.65rem auto;
    }
`
export const Name = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
`
export const Ingredients = styled.div`
  grid-area: ingred;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
`
export const Price = styled.div`
  grid-area: price;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  input {
    width: 100%;
    background: transparent;
    border: 0;
    border-radius: 5px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 12px 14px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
}
`
export const Description = styled.div`
  grid-area: desc;
  display: flex;
  flex-direction: column;
  gap: 16px;

  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 6px 8px;
  gap: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  @media(max-width: 1100px){
    input {
      width: 125px;
    }
  }
`