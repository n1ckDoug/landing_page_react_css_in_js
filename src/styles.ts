import styled, { createGlobalStyle } from 'styled-components';

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
