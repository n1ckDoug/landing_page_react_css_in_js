import styled from 'styled-components';

import { Props } from '.';

export const Titulo = styled.h1<Props>`
  color: crimson;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '32px')};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px !important;
  }
`;
