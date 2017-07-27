// npm libs
import {
  push,
} from 'react-router-redux';

export function goTo(route) {
  return (dispatch, getState) => dispatch(push(route));
}
