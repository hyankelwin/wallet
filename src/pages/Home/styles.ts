import styled, { css } from 'styled-components';
import Color from '../../styles/color';

interface LoadingProps {
  isLoading: boolean;
  isSuccess?: boolean;
}

export const Content = styled.div`
  display: flex;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export const List = styled.div`
  display: grid;
  justify-content: center;
  width: 70%;
  height: 100vh;
  background-color: transparent;
  margin: 5px;
  border-radius: 4px;

  @media (max-width: 1300px) {
    display: none;
    padding: 10px;
  }

  .container-list {
    max-width: 500px;
    align-self: center;

    p {
      color: ${Color.white};
      font-size: 28px;
      font-weight: 500;
    }

    span {
      color: ${Color.white};
      opacity: 0.6;
    }
  }

  .container-design {
    p {
      color: ${Color.white};
      margin-bottom: 10px;
    }
  }

  .container-footer {
    max-width: 500px;

    p {
      color: ${Color.white};
      margin-bottom: 20px;
    }

    p:nth-child(2) {
      color: ${Color.success.default};
    }
  }
`;

export const CardDesignContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 600px;
  flex-wrap: wrap;
`;

export const Card = styled.div<LoadingProps>`
  display: flex;
  width: 620px;
  max-height: 875px;
  justify-content: center;
  background-color: ${Color.white};
  margin: 5px;
  border-radius: 4px;

  @media (max-width: 800px) {
    width: 100vh;
  }

  @media (max-width: 1300px) {
    ${props =>
      props.isLoading &&
      css`
        height: 600px;
      `}
  }
`;

export const Column = styled.div<LoadingProps>`
  width: 100%;

  ${props =>
    (props.isLoading || props.isSuccess) &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const Head = styled.div`
  display: grid;
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  p {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 5px;
  }

  span {
    font-size: 14px;
  }

  span:nth-child(3) {
    padding-top: 5px;
    font-weight: 500;
    color: ${Color.primary.default};
  }
`;

export const SuccessContainer = styled.div`
  padding: 30px;
`;

export const HeadSuccess = styled.div`
  border-bottom: 1px solid #e3e3e3;

  .icon {
    background-color: #fdfdfd;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #20be79;
    margin: auto;
  }

  .head-description {
    display: grid;
    padding-bottom: 30px;
    p {
      font-size: 24px;
      font-weight: 500;
      color: ${Color.success.default};
      margin-top: 30px;
      text-align: center;
    }

    span {
      opacity: 0.4;
      font-size: 14px;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

export const BodySuccess = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  p {
    text-align: center;
    color: ${Color.primary.default};
    font-weight: 500;
  }

  .container-info-card {
    margin-top: 40px;
  }

  .info-card {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #e3e3e3;

    p:nth-child(1) {
      opacity: 0.4;
      font-weight: normal;
      align-items: center;
      display: flex;
    }

    p:nth-child(2) {
      font-weight: 500;
      width: 185px;
      text-align: end;
      word-break: break-all;
    }
  }
`;
