import { GOOD_LETTER, BAD_LETTER, WRONG_POSITION } from '../constants';
import {AbstractIOChannel} from './AbstractIOChannel'
import { Word, WordResult } from '../types';

const EVAL_TO_RESULT = {
	'absent': BAD_LETTER,
	'present': WRONG_POSITION,
	'correct': GOOD_LETTER,
};

export class BrowserIOChannel extends AbstractIOChannel{
	changeWord(){}

	tryWord(word:Word='') {
		word.split('').map(letter => {
			const event = new KeyboardEvent('keydown', {bubbles: true, key: letter});
			document.querySelector('game-app').dispatchEvent(event);
		})			
		const event = new KeyboardEvent('keydown', {bubbles: true, key: 'Enter'});
		document.querySelector('game-app').dispatchEvent(event);

		const gameState = JSON.parse(window?.localStorage?.gameState || '{}');
		return gameState.evaluations[gameState.rowIndex-1]
			.map(evaluation => EVAL_TO_RESULT[evaluation])
			.join('');
	}
}

export default BrowserIOChannel;