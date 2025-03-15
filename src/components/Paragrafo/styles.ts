import styled from 'styled-components';

import { Props } from '.';

export const Paragrafo = styled.p<Props>`
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '16px')};
  color: ${(props) => (props.tipo === 'principal' ? '#000' : '#fff')};

  @media (max-width: 768px) {
    font-size: 16px !important;
  }
`;
