/* eslint import/prefer-default-export: "off" */

// npm libs
import {
  push,
} from 'react-router-redux';

export function goTo(route) {
  return dispatch => dispatch(push(route));
}
