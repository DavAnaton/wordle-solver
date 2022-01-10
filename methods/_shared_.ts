import { GOOD_LETTER, BAD_LETTER, WRONG_POSITION } from '../constants';


export function resultsPerLetter(word='', result='') {
	return word.split('')
		.map((letter, index) => ({ letter, [result[index]]: 1 }))
		.reduce((obj, { letter, ...results }) => {
			obj[letter] = obj[letter] || {};
			for (const [result, value] of Object.entries(results)) {
				obj[letter][result] = (obj[letter][result] || 0) + value;
			}
			return obj;
		}, {});
}

export function generateFilterFn(word, result) {
	const letterResults = resultsPerLetter(word, result);
	const funcs = word.split('').map((letter, index) => {
		if (result[index] === GOOD_LETTER) {
			return w => w[index] === letter;
		} else if (result[index] === WRONG_POSITION) {
			return w => w.includes(letter) && w[index] !== letter;
		} else {
			const timesLetterInWord = (letterResults[letter][GOOD_LETTER] || 0) + (letterResults[letter][WRONG_POSITION] || 0);
			if (timesLetterInWord > 0) {
				return w => (w.split(letter).length - 1) === timesLetterInWord && w[index] !== letter;
			}
			else {
				return w => !w.includes(letter);
			}
		}
	});
	return filteredWord => funcs.reduce((bool, f) => bool && f(filteredWord), true);
}
