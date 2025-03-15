import { Paragrafo as P } from './styles';

export type Props = {
  children: string;
  fontSize?: number;
  tipo: 'principal' | 'secundario';
};

const Paragrafo = (props: Props) => (
  <P fontSize={props.fontSize} tipo={props.tipo}>
    {props.children}
  </P>
);

export default Paragrafo;
