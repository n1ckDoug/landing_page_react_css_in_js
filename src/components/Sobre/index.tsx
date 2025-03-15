import { Container } from '../../styles';
import { SobreContainer, BarraTitulo } from './styles';

// Componentes
import Titulo from '../Titulo';
import Paragrafo from '../Paragrafo';

const Sobre = () => (
  <Container>
    <SobreContainer>
      <Titulo fontSize={48}>Bem vindo ao nosso site</Titulo>
      <BarraTitulo>a</BarraTitulo>
      <Paragrafo tipo="principal" fontSize={20}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione illo
        perferendis optio dolorum esse maxime tempora! Quam aliquam quae, rerum
        alias nostrum, voluptatum quaerat reprehenderit dolores deserunt
        reiciendis sequi officia! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ullam mollitia repellat enim beatae reprehenderit amet
        excepturi a quod doloribus, omnis eum cumque exercitationem, nisi fuga.
        Ullam, doloribus asperiores. Incidunt magni necessitatibus eius
        temporibus impedit quibusdam quo eos laborum alias aperiam!
      </Paragrafo>
      <a href="#">Saiba mais</a>
    </SobreContainer>
  </Container>
);

export default Sobre;
