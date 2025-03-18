import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: black;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const LogoFooter = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 42px;

  span {
    color: crimson;
  }
`;

export const LinksFooter = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 24px 0;

  li {
    margin-left: 12px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
  }
`;

export const DireitosFooter = styled.p`
  margin-top: 60px;
  border-top: 1px solid #fff;
  padding: 32px 0;
`;
