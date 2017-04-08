const Utilities = {

	sortBy(a, b) {

		const aProp = a.prop;
		const bProp = b.prop;

		if (aProp > bProp) {
			return 1;
		}

		return -1;
	},

	jsonToArray(json) {

		const array = [];

		for (const key in json) {
			// no-prototype-builtins
			if (Object.hasOwnProperty.call(json, key)) {
				const object = json[key];
				array.push(object);
			}
		}

		return array;
	},

	getType(object) {
		return ({}).toString.call(object).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	},

	cloneObject(object) {
		return Object.assign({}, object);
	},
	arrayIndexOf(array, key, value) {

		for (let i = 0, k = array.length; i < k; i += 1) {
			if (array[i][key] === value) {
				return i;
			}
		}

		return -1;
	},

	getCookie(cname) {

		const cookieData = document.cookie.split(';');
		const name = `${cname}=`;

		for (let index = 0; index < cookieData.length; index += 1) {

			let cookieChunk = cookieData[index];

			while (cookieChunk.charAt(0) === ' ') {
				cookieChunk = cookieChunk.substring(1);
			}

			if (cookieChunk.indexOf(name) === 0) {
				return cookieChunk.substring(name.length, cookieChunk.length);
			}
		}

		return false;
	},

	updatePageTitle(page) {
		document.title = `player | ${page}`;
	}

};

export default Utilities;