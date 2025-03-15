import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 100%;
  background-color: crimson;
`;

export const CardInfo = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 28px;

  div {
    padding: 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }

  .cardBlack {
    background-color: #000;
  }
`;

export const CardItem = styled.div`
  i {
    color: #fff;
    font-size: 40px;
  }
`;

export const CardTitulo = styled.h1`
  color: #fff;
  font-weight: bold;
  margin: 24px 0;
`;
