import { dict } from '../dictionary';
import { chooseRandom, countLetters } from '../utils';
import { GOOD_LETTER, BAD_LETTER, WRONG_POSITION } from '../constants';

let secretWord;

export function changeWord(showWord=true){
	secretWord = chooseRandom(dict);
	if(showWord) console.log(`Secret word is ${secretWord}\n`);
}
changeWord();

let success = false
export function isSuccess(){
	return success;
}

let tries = 5;
export function isFailure(){
	return tries === 0;
}

export function tryWord(word='') {
	if(tries===0) throw new Error('No more tries left');
	tries--;
	const letters = countLetters(secretWord);
	const results = word.split('').map(x => BAD_LETTER);
	word.split('').forEach((letter, index) => {
		if (letter !== secretWord[index]) return;
		letters[letter]--;
		results[index] = GOOD_LETTER;
	});
	word.split('').forEach((letter, index) => {
		if (results[index] !== GOOD_LETTER && letters[letter] > 0) {
			letters[letter]--;
			results[index] = WRONG_POSITION;
		}
	});
	
	if(results.join('').split(GOOD_LETTER).join('').length === 0) 
		success = true;
	return results.join('');
}

export default {changeWord,
isSuccess,
isFailure,
tryWord,}