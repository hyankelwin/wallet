import styled, { css } from 'styled-components';
import Color from '../../styles/color';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 150px;
  height: 56px;
  border: 2px solid ${Color.grey};
  line-height: 3;
  overflow: hidden;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;

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

  select {
    background: transparent;
    border: 0;
    outline: 0;
    flex: 1;
    font-size: 15px;
    cursor: pointer;
    padding: 10px;

    ${props =>
      props.isErrored &&
      css`
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
      `}
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  position: absolute;
  margin-top: 6px;
  margin-left: 112px;

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
