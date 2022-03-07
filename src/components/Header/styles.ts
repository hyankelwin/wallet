import styled from 'styled-components';
import Color from '../../styles/color';

export const Content = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.white};
  border-bottom: 1px solid #efefef;
  margin: 0 auto;

  @media (max-width: 400px) {
    width: 107%;
  }

  @media (max-width: 320px) {
    width: 113%;
  }

  div {
    display: flex;

    &:nth-child(1) {
      margin-left: 20px;
    }

    p {
      margin: 0;
      &:nth-child(1) {
        padding-right: 5px;
      }

      &:nth-child(2) {
        padding-right: 10px;
        color: ${Color.primary.default};
      }

      @media (max-width: 420px) {
        display: none;
      }
    }
  }
`;
