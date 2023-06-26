import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`
export const Title = styled.div`

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media(max-width: 699px){
    h1{
      margin: 56px 0 27px 35px;
    }
  } 

  @media(min-width: 700px){
    h1{
      margin: 34px 123px 32px 123px;
    }
  } 
`
export const Content = styled.table`
  margin: 0 123px;

  display: inline-block;
  border-collapse: collapse;
  border-radius: 12px;
  outline: 2px solid ${({ theme }) => theme.COLORS.DARK_1000}; 
  

  * {
    text-align: left;
    font-size: 20px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  thead,
  tbody tr {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  thead th {
    font-size: 14px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    padding: 21px 24px;
    
  }
  thead th {
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }


  th:first-child {
    border-top-left-radius: 12px;
  }

  th:last-child {
    border-top-right-radius: 12px;
    border-right: none;
  }

  td:nth-child(3){
    width: 70%;
  }
  th:nth-child(3){
    width: 70%;
  }
  td:nth-child(4){
    width: 165px;
  }
  th:nth-child(4){
    width: 165px;
  }

  tbody td {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 14px;
    font-family: Roboto;
    line-height: 160%;

    padding: 16px 24px;
  }

  tbody td {
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }


  td:first-child {
    border-top-left-radius: 12px;
  }

  td:last-child {
    border-top-right-radius: 12px;
    border-right: none;
  }
  tbody tr {
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};;
  }

  tr:last-child {
    border-bottom: none;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    
    
  }

`