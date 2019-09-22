import React from 'react';

const API = {
  createArray(length, start = 0) {
    return Array.from(Array(length).keys()).map(value => value + start);
  },
};

export const componentDidMount = callback => {
  return React.useEffect(callback, []);
};

export default API;
