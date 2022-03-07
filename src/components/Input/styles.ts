import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';
import Color from '../../styles/color';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 4px;
  border: 2px solid ${Color.grey};
  padding: 16px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${Color.error.default};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${Color.primary.default};
      border-color: ${Color.primary.default};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${Color.primary.default};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #1c1c1c;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  @media (min-width: 600px) {
    ${props =>
      props.small &&
      css`
        position: absolute;
        margin-left: 96px;
      `};
  }

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
