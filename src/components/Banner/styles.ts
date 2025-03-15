import styled from 'styled-components';

import floresta from '../../images/floresta.jpg';

export const Banner = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${floresta});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Opac = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
`;

export const AlinhaCentro = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    width: 500px;
    color: #ccc;
    line-height: 20px;
    margin-bottom: 32px;
    font-size: 18px;

    @media (max-width: 768px) {
      width: 250px;
    }
  }

  a {
    padding: 16px 22px;
    text-align: center;
    text-decoration: none;
    background-color: crimson;
    color: #fff;
    font-weight: bold;
    border-radius: 32px;
    transition: all 0.5s ease;

    &:hover {
      color: crimson;
      background-color: #fff;
    }
  }
`;

export const BannerTitulo = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 50px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-top: 120px;
    font-size: 32px;
  }
`;
