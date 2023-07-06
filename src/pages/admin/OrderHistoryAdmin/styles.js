import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  

  position: relative;
  min-height: 100vh;

`
export const Title = styled.div`

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media(max-width: 1100px){
    h1{
      margin: 56px 0 27px 35px;
    }
  } 

  @media(min-width: 1100px){
    h1{
      margin: 34px 123px 32px 123px;
    }
  } 
`
export const Desktop = styled.table`
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


  th:nth-child(1){
    width: 15%;
  }
  td:nth-child(2){
    width: 10%;
  }
  th:nth-child(2){
    width: 10%;
  }
  td:nth-child(3){
    width: 60%;
  }
  th:nth-child(3){
    width: 60%;
  }

  tbody td {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 14px;
    font-family: Roboto;
    line-height: 160%;

    padding: 16px 24px;
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 14px;
    font-family: Roboto;
    line-height: 160%;
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
export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  margin-bottom: 115px;
`

export const Card = styled.div`
  width: 85%;
  display: grid;
  grid-template-areas: "code status date"
                       "products products products";
                       
  border-radius: 12px;
  grid-row-gap: 16px;
  
  
  padding: 8px 20px;
  align-items: center;

  outline: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  margin: 0 30px;
  text-align: left;

  span {
    color: var(--light-light-400, #C4C4CC);
    /* Roboto/Smaller regular */
    font-size: 14px;
    font-family: Roboto;
    line-height: 160%;
  }

  span:nth-child(1) {
    grid-area: code;
  }
  span:nth-child(2) {
    grid-area: status;
  }
  span:nth-child(3) {
    grid-area: date;
  }
  span:nth-child(4) {
    grid-area: products;
  }
`
export const StatusElipse = styled.td`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: left;
  gap: 8px;
  
 

`
