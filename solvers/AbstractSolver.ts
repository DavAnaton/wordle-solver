import { readDict } from '../dictionary/index';
import { GOOD_LETTER, BAD_LETTER, WRONG_POSITION } from '../constants';
import {Word, WordResult} from '../types';

export abstract class AbstractSolver {
	constructor(){
		this.reset();
	}

	dict: Word[];
	reset() {
		this.dict = readDict();
	}

	currentWord: Word;
	getWord(){
		if(!this.currentWord)
			this.currentWord = this.generateWord();
		return this.currentWord;
	}
	abstract generateWord():Word;

	answer(result: WordResult){
		this.dict = this.dict.filter(this.generateFilterFn(result))
		this.currentWord = null;
	}

	resultsPerLetter(word='', result='') {
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

	generateFilterFn(result) {
		const letterResults = this.resultsPerLetter(this.currentWord, result);
		const funcs = this.currentWord.split('').map((letter, index) => {
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
}

export default AbstractSolver;
