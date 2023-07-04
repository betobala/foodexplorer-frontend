import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`

export const ItemImage = styled(Link)`
  img{
    width: 72px;
  }

`
export const NameButton = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

  }
  button {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

`