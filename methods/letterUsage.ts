import { readDict } from '../dictionary';
import { generateFilterFn } from './_shared_';
import { chooseRandom, countLetters } from '../utils';

const LETTER_USAGE = 'EARIOTNSLCUDPMHGBFYWKVXZJQ';
function getWordScore(word = '') {
	return Object.keys(countLetters(word))
		.map((letter, count) => count * (26 - LETTER_USAGE.indexOf(letter)))
		.reduce((score, letterScore) => score + letterScore, 0);
}

let dict;
export function reset() {
	dict = readDict();
	// dict = readDict().sort((w1, w2) => getWordScore(w2) - getWordScore(w1));
}
reset();

let currentWord;
export function getWord() {
	let maxScore = 0;
	currentWord = chooseRandom(dict.map(word => {
		let score = getWordScore(word);
		if (score > maxScore) maxScore = score;
		return { word, score };
	}).filter(({ score }) => score === maxScore)).word;
	return currentWord;
}

export function answer(result = '') {
	dict = dict.filter(generateFilterFn(currentWord, result))
}

export default {reset,
getWord,
answer}