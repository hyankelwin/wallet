import styled from 'styled-components';
import Color from '../../styles/color';

interface Image {
  src: string;
}

export const Container = styled.div`
  margin: 4px;

  div:hover {
    transform: scale(1.3);
    transition: ease-in;
    transition-duration: 150ms;
  }
`;

export const Content = styled.div<Image>`
  border: 1px solid ${Color.grey};
  border-radius: 5px;
  width: 100px;
  height: 100px;
  background: ${props => `url(${props.src})`};
`;
