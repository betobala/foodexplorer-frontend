import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  border: none;
  resize: none;

  border-radius: 8px;
  padding: 14px;

  &::placeholder {
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;