import {
	MY_CONSTANT
} from 'constants/index';

export function addSongToFavorites(data) {
	return {
		type: MY_CONSTANT,
		data
	};
}