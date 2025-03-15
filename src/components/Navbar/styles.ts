import styled from 'styled-components';

type Props = {
  altura?: number;
};

export const Nav = styled.nav<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => (props.altura ? 'black' : 'transparent')};
  transition: all 0.3s ease;
  padding: 20px 0;
  z-index: 100;

  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Logo = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 42px;

  span {
    color: crimson;
  }
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 12px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    margin: 24px 0;
  }
`;

export const BtnCadastrar = styled.a`
  width: 150px;
  padding: 14px 0;
  text-align: center;
  text-decoration: none;
  background-color: crimson;
  color: #fff;
  font-weight: bold;
  border-radius: 32px;
  cursor: pointer;
`;
