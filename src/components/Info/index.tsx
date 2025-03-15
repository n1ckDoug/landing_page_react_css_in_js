// Estilos
import { InfoContainer, CardInfo, CardTitulo, CardItem } from './styles';

// Componente
import Paragrafo from '../Paragrafo';

const Info = () => (
  <InfoContainer>
    <CardInfo>
      <CardItem>
        <i className="fa-solid fa-clock-rotate-left"></i>
        <CardTitulo>Nossa História</CardTitulo>
        <Paragrafo tipo="secundario">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          consectetur, officia dignissimos nihil, ipsam itaque corrupti aliquid
          iure eveniet quo eaque quibusdam, labore pariatur inventore delectus
          explicabo ipsum impedit error.
        </Paragrafo>
      </CardItem>
      <CardItem className="cardBlack">
        <i className="fa-regular fa-circle-dot"></i>
        <CardTitulo>Nossa Missão</CardTitulo>
        <Paragrafo tipo="secundario">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          consectetur, officia dignissimos nihil, ipsam itaque corrupti aliquid
          iure eveniet quo eaque quibusdam, labore pariatur inventore delectus
          explicabo ipsum impedit error.
        </Paragrafo>
      </CardItem>
      <CardItem>
        <i className="fa-solid fa-eye"></i>
        <CardTitulo>Nossa Visão</CardTitulo>
        <Paragrafo tipo="secundario">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          consectetur, officia dignissimos nihil, ipsam itaque corrupti aliquid
          iure eveniet quo eaque quibusdam, labore pariatur inventore delectus
          explicabo ipsum impedit error.
        </Paragrafo>
      </CardItem>
    </CardInfo>
  </InfoContainer>
);

export default Info;
