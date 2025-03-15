import { useState } from 'react';

// Estilos
import { Container } from '../../styles';
import { Banner as B, Opac, AlinhaCentro, BannerTitulo } from './styles';

// Componente
import Navbar from '../Navbar';

const Banner = () => {
  // Pegando a altura para mudar o fundo da navbar
  const [getAltura, setGetAltura] = useState(0);

  window.addEventListener('scroll', () => {
    setGetAltura(window.scrollY);
  });

  return (
    <B>
      <Opac>
        <Navbar altura={getAltura} />
        <Container>
          <AlinhaCentro>
            <BannerTitulo>Site de Viagem</BannerTitulo>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              reprehenderit nulla debitis laboriosam harum quis fugiat excepturi
              dolores facere dolor.
            </p>
            <a href="#">Clique aqui</a>
          </AlinhaCentro>
        </Container>
      </Opac>
    </B>
  );
};

export default Banner;
