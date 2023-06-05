import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;

  padding: 4px 8px;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`
