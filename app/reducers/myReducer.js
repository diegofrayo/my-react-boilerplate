/* eslint consistent-return: "off" */

// npm libs
import update from 'immutability-helper';

// redux
import {
  MY_ENTITY_GET_SUCCESS,
} from 'constants/index';

const initialState = {};

export default function myEntityReducer(state = initialState, action = {}) {

  switch (action.type) {

    case MY_ENTITY_GET_SUCCESS:

      // SET
      // return update(state, {
      //   records: {
      //     $set: [].concat(action.payload),
      //   },
      // });

      // DELETE
      // return update(state, {
      //   records: {
      //     $set: state.records.filter((myEntity) => {
      //       if (myEntity.id !== action.myEntityId) {
      //         return myEntity;
      //       }
      //     }),
      //   },
      // });

      // ADD NEW ITEM AND SORT
      // return update(state, {
      //   records: {
      //     $apply: (myArray) => {
      //       const newArray = update(myArray, {
      //         $push: [action.object],
      //       });
      //       return newArray.sort(Utilities.sortBy);
      //     },
      //   },
      // });

      return update(state, {});

    default:
      return state;

  }

}
