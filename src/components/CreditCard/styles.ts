import styled, { css } from 'styled-components';
import { SideProps } from '../../common/interfaces/CreditCard.interface';
import Color from '../../styles/color';

interface CreditCardProps {
  side: SideProps;
  fieldFocused: string;
  image: string;
}

export const Container = styled.div`
  position: relative;
  height: 240px;
  width: 400px;
`;

export const CardFront = styled.div<CreditCardProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 30%;
  background: ${props => `url(${props.image})`};
  border-radius: 5px;
  backface-visibility: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.4s ease-out;

  @media (max-width: 600px) {
    left: 20%;
  }

  @media (max-width: 560px) {
    left: 15%;
  }

  @media (max-width: 530px) {
    left: 10%;
  }

  @media (max-width: 500px) {
    left: 7%;
  }

  @media (max-width: 420px) {
    height: 220px;
    width: 350px;
    left: 8%;
  }

  ${props =>
    props.side.value &&
    css`
      transform: perspective(1000px) rotateY(-180deg);
    `};

  ${props =>
    !props.side.value &&
    css`
      transform: perspective(1000px) rotateY(0deg);
    `};

  ${props =>
    !props.image &&
    css`
      background-color: ${Color.primary.default};
    `};

  .card-number-box {
    font-size: 22px;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 30px;

    ${props =>
      props.fieldFocused === 'number' &&
      css`
        font-weight: 500;
      `};

    @media (max-width: 400px) {
      font-size: 18px;
    }
  }

  .flexbox {
    display: flex;
  }

  .box:nth-child(1) {
    margin-right: auto;
  }

  .box {
    font-size: 15px;
    color: #fff;

    @media (max-width: 400px) {
      font-size: 12px;
    }
  }

  .card-holder-name {
    text-transform: uppercase;
  }
`;

export const CardBack = styled.div<CreditCardProps>`
  position: absolute;
  left: 30%;
  height: 100%;
  width: 100%;
  background: ${props => `url(${props.image})`};
  border-radius: 5px;
  padding: 20px 0;
  text-align: right;
  backface-visibility: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) rotateY(180deg);
  transition: transform 0.4s ease-out;

  @media (max-width: 600px) {
    left: 20%;
  }

  @media (max-width: 560px) {
    left: 15%;
  }

  @media (max-width: 530px) {
    left: 10%;
  }

  @media (max-width: 500px) {
    left: 7%;
  }

  @media (max-width: 420px) {
    height: 220px;
    width: 350px;
    left: 8%;
  }

  ${props =>
    props.side.value &&
    css`
      transform: perspective(1000px) rotateY(0deg);
    `};

  ${props =>
    !props.side.value &&
    css`
      transform: perspective(1000px) rotateY(180deg);
    `};

  ${props =>
    !props.image &&
    css`
      background-color: ${Color.primary.default};
    `};

  .stripe {
    background-color: #000;
    width: 100%;
    margin: 10px 0;
    height: 50px;
  }

  .box {
    padding: 0 20px;

    span {
      color: #fff;
      font-size: 15px;
    }

    .cvv-box {
      height: 50px;
      padding: 10px;
      margin-top: 5px;
      color: #333;
      background-color: #fff;
      border-radius: 5px;
      width: 100%;
    }

    img {
      margin-top: 30px;
      height: 30px;

      @media (max-width: 420px) {
        margin-top: 15px;
      }
    }
  }
`;

export const ContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  img {
    height: 40px;
  }
`;
