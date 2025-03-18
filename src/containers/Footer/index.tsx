import { Container } from '../../styles';
import { Footer as F, LogoFooter, LinksFooter, DireitosFooter } from './styles';

const ano = new Date().getFullYear();

const Footer = () => (
  <F>
    <Container>
      <LogoFooter>
        <span>L</span>ogo
      </LogoFooter>
      <LinksFooter>
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
      </LinksFooter>
      <DireitosFooter>
        &copy; {ano} - Todos os direitos reservados
      </DireitosFooter>
    </Container>
  </F>
);

export default Footer;
