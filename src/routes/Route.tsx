import React from 'react';
import { RouteProps, Route as ReactDOMRoute } from 'react-router-dom';

const Route: React.FC<RouteProps> = ({ ...rest }) => {
  return <ReactDOMRoute {...rest} />;
};

export default Route;
