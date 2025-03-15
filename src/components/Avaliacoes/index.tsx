// Estilos
import { Container } from '../../styles';
import { BarraTitulo, AvaliacoesContainer } from './styles';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Componente
import Titulo from '../Titulo';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Avaliacoes = () => (
  <AvaliacoesContainer>
    <Container>
      <div className="testimonials_header">
        <Titulo fontSize={48}>Avaliações</Titulo>
        <BarraTitulo>a</BarraTitulo>
        <h2>O que os clientes dizem</h2>
        <p>
          Quer saber o que torna a nossa marca tão especial? Confira o que
          nossos clientes tem a dizer!
        </p>
      </div>
    </Container>
    <Swiper
      centeredSlides={true}
      spaceBetween={24}
      loop={true}
      grabCursor={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 2500, // tempo em ms
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2, // quantidade de card que vai aparecer nessa resolução
          spaceBetween: 20, // espaço que vai ficar entra cada card
        },
        // Tamanho da tela
        // Até 768px
        768: {
          slidesPerView: 3, // quantidade de card que vai aparecer nessa resolução
          spaceBetween: 18, // espaço que vai ficar entra cada card
        },
        // Tamanho da tela
        // Até 1188px
        1188: {
          slidesPerView: 4, // quantidade de card que vai aparecer nessa resolução
          spaceBetween: 24, // espaço que vai ficar entra cada card
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_01.png" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 01</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_02.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 02</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_03.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 03</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_04.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 04</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_05.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 05</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_06.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 06</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_07.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 07</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_08.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 08</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_09.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 09</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ullam nobis vel sequi maxime quae eius alias aperiam possimus magnam
          iure labore est, libero consequuntur tempore? Debitis neque eligendi
          odio."
        </blockquote>
        <div className="testimonials-author">
          <div className="author-avatar">
            <img src="/src/images/autor_10.jpg" alt="Foto autor" />
          </div>
          <div className="author-info">
            <h3>Cliente 10</h3>
            <p>Cliente desde 2020</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </AvaliacoesContainer>
);

export default Avaliacoes;
