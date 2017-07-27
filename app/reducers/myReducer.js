/* eslint consistent-return: "off" */

// npm libs
import update from 'immutability-helper';

// redux
import {
  MY_ENTITY_GET_SUCCESS,
  MY_ENTITY_DELETE_SUCCESS,
} from 'constants/index';

// utils
import Utilities from 'utils/utilities';

const initialState = {
  records: [],
};

export default function myEntityReducer(state = initialState, action = {}) {

  switch (action.type) {

    case MY_ENTITY_GET_SUCCESS:
      return update(state, {
        records: {
          $set: [].concat(action.payload),
        },
      });

    case MY_ENTITY_DELETE_SUCCESS:
      return update(state, {
        records: {
          $set: state.records.filter((myEntity) => {
            if (myEntity.id !== action.myEntityId) {
              return myEntity;
            }
          }),
        },
        myArray: {
          $apply: (myArray) => {
            const newArray = update(myArray, {
              $push: [action.object],
            });
            return newArray.sort(Utilities.sortBy);
          },
        },
      });

    default:
      return state;

  }

}
