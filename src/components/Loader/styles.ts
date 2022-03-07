import styled, { keyframes } from 'styled-components';
import Color from '../../styles/color';

interface ListItemProps {
  size?: string;
}

export const Container = styled.div<ListItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 16px;
    text-align: center;
    color: #666360;
    margin-top: 20px;
  }
`;

const SpinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<ListItemProps>`
  font-size: 0.5rem;
  position: relative;
  text-indent: -9999em;
  border-radius: 50%;
  width: ${props => props.size || '3rem'};
  height: ${props => props.size || '3rem'};
  border-top: 0.3rem solid rgba(255, 255, 255, 0.8);
  border-right: 0.3rem solid rgba(255, 255, 255, 0.8);
  border-bottom: 0.3rem solid rgba(255, 255, 255, 0.8);
  border-left: 0.3rem solid ${Color.primary.default};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${SpinnerAnimation} 0.6s infinite linear;
  animation: ${SpinnerAnimation} 0.6s infinite linear;

  &:after {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
`;
