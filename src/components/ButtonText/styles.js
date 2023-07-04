import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

`