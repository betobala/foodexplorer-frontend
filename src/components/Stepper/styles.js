import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  gap: 14px;
  max-width: 100px;
  max-height: 32px;
  
  h2 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
 
`