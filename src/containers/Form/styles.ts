import styled, { css } from 'styled-components';
import Color from '../../styles/color';

interface ImageProps {
  img: string;
  imageSelected?: string;
}

export const ContentForm = styled.div`
  background-color: ${Color.white};
  padding: 20px 40px;
  border-radius: 8px;
`;

export const FooterForm = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Column = styled.div`
  span {
    font-size: 14px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
      display: inline;
    }

    .cvv {
      @media (min-width: 600px) {
        max-width: 150px;
        margin-left: 50px;
      }
    }
  }

  .expiration-input {
    display: flex;

    div:nth-child(1) {
      margin-right: 20px;
    }
  }
`;

export const ContentImage = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 20px;
  max-width: 520px;
  overflow-x: auto;

  @media (max-width: 600px) {
    max-width: 450px;
  }

  @media (max-width: 560px) {
    max-width: 420px;
  }

  @media (max-width: 530px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 370px;
  }

  @media (max-width: 420px) {
    max-width: 330px;
  }
`;

export const Image = styled.div<ImageProps>`
  background: ${props => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px solid ${Color.grey};
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  flex-shrink: 0;

  ${props =>
    props.imageSelected === props.img &&
    css`
      border: 5px solid ${Color.primary.default};
    `};
`;
