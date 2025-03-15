import styled from 'styled-components';

export const SobreContainer = styled.div`
  margin-top: 120px;
  margin-bottom: 100px;
  text-align: center;

  a {
    display: inline-block;
    padding: 16px 22px;
    text-decoration: none;
    background-color: #fff;
    color: crimson;
    font-weight: bold;
    border-radius: 32px;
    transition: all 0.5s ease;
    border: 2px solid crimson;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      color: #fff;
      background-color: crimson;
      border: 2px solid crimson;
    }
  }
`;

export const BarraTitulo = styled.p`
  max-width: 150px;
  margin: 0 auto;
  width: 100%;
  background-color: crimson;
  color: crimson;
  margin-bottom: 24px;
  font-size: 7px;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;
