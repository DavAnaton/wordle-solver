import { GOOD_LETTER, BAD_LETTER, WRONG_POSITION } from '../constants';
import {AbstractIOChannel} from './AbstractIOChannel'
import { Word, WordResult } from '../types';

const prompt =require('prompt-sync')()

const HELP_TEXT = `Please use ${GOOD_LETTER} (correct), ${BAD_LETTER} (bad letter), ${WRONG_POSITION} (wrong position) to answer. \nEx: VV-XV`;

export class UserIOChannel extends AbstractIOChannel{
	firstGuess = true;

	changeWord(){}

	tryWord(word:Word='') {
		const REGEX = new RegExp(`^[${GOOD_LETTER}|${BAD_LETTER}|${WRONG_POSITION}]{${word.length}}$`);
		let answer = '';
		do{
			console.log(`I'm guessing your word is ${word}`);
			if(this.firstGuess){
				console.log(HELP_TEXT);
				this.firstGuess = false;
			}
			answer = prompt('>').toUpperCase();
		}while(!answer.match(REGEX));

		this._isSuccess = !!answer.match(new RegExp(`^${GOOD_LETTER}{${word.length}}$`));
		return answer;
	}
}

export default UserIOChannel;