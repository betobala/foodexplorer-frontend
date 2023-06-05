import styled from "styled-components";

export const Container = styled.button`
  min-width: 216px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 8px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`