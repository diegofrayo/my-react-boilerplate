/* eslint consistent-return: "off" */
/* eslint indent: "off" */

// npm libs
import update from 'immutability-helper';

// redux
import {
	MY_CONSTANT
} from 'constants/index';

// js utils
import Utilities from 'utils/utilities/Utilities';

export default function myReducer(state = {}, action = {}) {

	switch (action.type) {

		case MY_CONSTANT:
			return update(state, {
				errorMessage: {
					$set: '',
				},
				myArray: {
					$apply: (myArray) => {
						const newArray = update(myArray, {
							$push: [action.object]
						});
						return newArray.sort(Utilities.sortBy);
					}
				},
				status: {
					$set: 'SUCCESS',
				}
			});

		default:
			return state;

	}

}