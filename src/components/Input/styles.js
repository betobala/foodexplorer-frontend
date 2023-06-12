import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 450px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 14px;
  
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
      width: 100%;
      background: transparent;
      border: 0;

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  img {
    padding-left: 15px;
  }

`