import styled from 'styled-components';

export const AvaliacoesContainer = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  background-color: #f9fafb;

  .testimonials_header {
    text-align: center;

    h2 {
      color: #111928;
      font-size: 32px;
      margin-bottom: 16px;
    }

    p {
      color: #637381;
      font-size: 16px;
      margin-bottom: 60px;
    }
  }

  .mySwiper {
    width: 100%;
    height: 329px;
    padding-bottom: 60px;

    .swiper-slide {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 18px;
      justify-content: center;
      box-shadow: 0px 0px 20px 0px rgba(92, 115, 160, 0.07);
      padding: 34px;
      border-radius: 12px;
    }

    .testimonials-rate {
      display: flex;
      gap: 2px;
    }

    .testimonials-rate i {
      color: #f9b707;
    }

    .testimonials-quote {
      color: #637381;
      font-size: 16px;
    }

    .testimonials-author {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
    }

    .author-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .author-info h3 {
      font-weight: 600;
      font-size: 14px;
      color: #111928;
    }

    .author-info p {
      font-size: 12px;
      color: #8889a8;
    }
  }
`;

export const BarraTitulo = styled.p`
  max-width: 150px;
  margin: 0 auto;
  width: 100%;
  background-color: crimson;
  color: crimson !important;
  margin-bottom: 24px !important;
  font-size: 7px !important;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;
