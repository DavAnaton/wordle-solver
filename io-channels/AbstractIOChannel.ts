import { Word, WordResult } from '../types';

export abstract class AbstractIOChannel {
	constructor(){
		this.changeWord(false);
	}

	protected secretWord: Word;
	abstract changeWord(displayNewWord: boolean):void;

	protected _isSuccess = false;
	isSuccess(){
		return this._isSuccess;
	}

	protected remainingTries = 5;
	isFailure(){
		return this.remainingTries <= 0;
	}

	abstract tryWord(word: Word): WordResult;
};

export default AbstractIOChannel