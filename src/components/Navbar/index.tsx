import { Container } from '../../styles';
import { Nav, Logo, Links, BtnCadastrar } from './styles';

type Props = {
  altura?: number;
};

const Navbar = (props: Props) => (
  <Nav altura={props.altura}>
    <Container>
      <div className="d-flex">
        <Logo>
          <span>L</span>ogo
        </Logo>
        <Links>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Avaliações</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </Links>
        <BtnCadastrar>Cadastre-se</BtnCadastrar>
      </div>
    </Container>
  </Nav>
);

export default Navbar;
