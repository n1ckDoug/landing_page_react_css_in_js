import styled from 'styled-components';

export const ContatoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  margin: 80px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
    width: 100%;
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

export const FormularioItem = styled.div`
  display: flex;
  flex-direction: column;

  .flexContato {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    .formEmail {
      margin-right: 20px;

      @media (max-width: 768px) {
        margin: 0;
      }
    }
  }

  input {
    margin-bottom: 16px;
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid crimson;
    padding: 12px 0;
    outiline: none;

    &:focus {
      outline: none;
    }
  }

  label {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;

    span {
      color: crimson;
    }
  }

  textarea {
    margin-bottom: 24px;
    border: 0;
    border-bottom: 1px solid crimson;
    resize: none;
    height: 100px;

    &:focus {
      outline: none;
    }
  }
`;

export const BotaoCadastrar = styled.button`
  background-color: crimson;
  color: #fff;
  border: none;
  border: 2px solid crimson;
  padding: 20px 40px;
  border-radius: 32px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background-color: #fff;
    color: crimson;
    border: 2px solid crimson;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const ContatoInfo = styled.div`
  .formInfo {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      text-align: center;

      h1 {
        font-size: 32px;
      }
      p {
        font-size: 16px;
      }
    }
  }

  .formInfo:nth-child(1) {
    margin-bottom: 80px;

    h1 {
      margin-bottom: 12px;
    }
  }

  .formInfo:nth-child(2) {
    h1 {
      margin-top: 12px;
    }
  }
`;
