import React from 'react';

export const createArray = (length, start = 0) => {
  return Array.from(Array(length).keys()).map(value => value + start);
};

export const componentDidMount = callback => {
  return React.useEffect(callback, []);
};

export default {
  createArray,
  componentDidMount,
};
