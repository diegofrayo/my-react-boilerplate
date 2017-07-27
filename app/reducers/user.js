/* eslint consistent-return: "off" */

// npm libs
import update from 'immutability-helper';

// redux
import {
  USER_GET_SUCCESS,
  USER_DELETE_SUCCESS,
} from 'constants/index';

const initialState = {
  records: [],
};

export default function userReducer(state = initialState, action = {}) {

  switch (action.type) {

    case USER_GET_SUCCESS:
      return update(state, {
        records: {
          $set: [].concat(action.payload),
        },
      });

    case USER_DELETE_SUCCESS:
      return update(state, {
        records: {
          $set: state.records.filter((user) => {
            if (user.id !== action.userId) {
              return user;
            }
          }),
        },
      });

    default:
      return state;

  }

}
