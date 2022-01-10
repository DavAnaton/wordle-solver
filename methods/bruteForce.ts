import { readDict } from '../dictionary';
import { generateFilterFn } from './_shared_';
import { chooseRandom } from '../utils';

let dict;
export function reset() {
	dict = readDict();
}
reset();

let currentWord;
export function getWord() {
	currentWord = chooseRandom(dict);
	return currentWord;
}

export function answer(result = '') {
	dict = dict.filter(generateFilterFn(currentWord, result))
}
