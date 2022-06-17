import { dict } from '../dictionary/index';
import { chooseRandom, countLetters } from '../utils';
import { GOOD_LETTER, BAD_LETTER, WRONG_POSITION } from '../constants';
import {AbstractIOChannel} from './AbstractIOChannel'
import { LetterResult, Word, WordResult } from '../types';

export default class FakeWordIOChannel extends AbstractIOChannel{
	changeWord(showWord=true){
		this.secretWord = chooseRandom(dict);
		if(showWord) console.log(`Secret word is ${this.secretWord}\n`);
	}

	tryWord(word:Word='') {
		if(this.remainingTries === 0) 
			throw new Error('No more tries left');
		else
			this.remainingTries--;

		const result = word.split('').map(x => BAD_LETTER) as LetterResult[];
		const letterCount = countLetters(this.secretWord);

		word.split('').forEach((letter, index) => {
			if (letter !== this.secretWord[index]) 
				return;
			letterCount[letter]--;
			result[index] = GOOD_LETTER;
		});
		word.split('').forEach((letter, index) => {
			if (result[index] !== GOOD_LETTER && letterCount[letter] > 0) {
				letterCount[letter]--;
				result[index] = WRONG_POSITION;
			}
		});
		
		const returnValue = result.join('');
		this._isSuccess = (returnValue.split(GOOD_LETTER).join('').length === 0);
		
		return returnValue;
	}
}
