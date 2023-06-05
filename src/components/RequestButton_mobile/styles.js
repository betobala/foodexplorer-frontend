import styled from "styled-components";

export const Container = styled.button`
  
  display: flex;
  align-self: center;
  background-color: transparent;
  border: none;
  text-decoration: none;

  h1 {
    position: relative;
    right: 14px;
    bottom: 10px;
    
    width: 20px;
    height: 20px;
  

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 100%;
  }
`