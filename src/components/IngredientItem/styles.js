import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 10px;
  padding: 8px 16px;

  > button {
    border: none;
    background: none;
    
  }

   img {
    width: 10px;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    @media(max-width: 699px){
      width: 150px;
    }
    @media(min-width: 700px){
      min-width: 109px;
    }

   
    &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .elipsis {
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    @media(max-width: 699px){
      min-width: 150px;
    }
    @media(min-width: 700px){
      min-width: 109px;
    }
  }
`;