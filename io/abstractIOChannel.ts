// class abstractIOChannel {
// 	 secretWord;
// }
// module.exports.abstractIOChannel = abstractIOChannel;

// const { dict } = require('../dictionary');
// const { chooseRandom, countLetters } = require('../utils');
// const { GOOD_LETTER, BAD_LETTER, WRONG_POSITION } = require('../constants');


// function changeWord(showWord=true){
// 	secretWord = chooseRandom(dict);
// 	if(showWord) console.log(`Secret word is ${secretWord}\n`);
// }
// module.exports.changeWord = changeWord;
// changeWord();

// let success = false
// function isSuccess(){
// 	return success;
// }
// module.exports.isSuccess = isSuccess;

// let tries = 5;
// function isFailure(){
// 	return tries === 0;
// }
// module.exports.isFailure = isFailure;

// function tryWord(word='') {
// 	if(tries===0) throw new Error('No more tries left');
// 	tries--;
// 	const letters = countLetters(secretWord);
// 	const results = word.split('').map(x => BAD_LETTER);
// 	word.split('').forEach((letter, index) => {
// 		if (letter !== secretWord[index]) return;
// 		letters[letter]--;
// 		results[index] = GOOD_LETTER;
// 	});
// 	word.split('').forEach((letter, index) => {
// 		if (results[index] !== GOOD_LETTER && letters[letter] > 0) {
// 			letters[letter]--;
// 			results[index] = WRONG_POSITION;
// 		}
// 	});
	
// 	if(results.join('').split(GOOD_LETTER).join('').length === 0) 
// 		success = true;
// 	return results.join('');
// }
// module.exports.tryWord = tryWord;
