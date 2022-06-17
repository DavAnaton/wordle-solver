import AbstractSolver from './AbstractSolver';
import { chooseRandom, countLetters } from '../utils';

const LETTER_USAGE = 'EARIOTNSLCUDPMHGBFYWKVXZJQ';
export class LetterUsageSolver extends AbstractSolver{
	private getWordScore(word = '') {
		return Object.keys(countLetters(word))
			.map((letter, count) => count * (26 - LETTER_USAGE.indexOf(letter)))
			.reduce((score, letterScore) => score + letterScore, 0);
	}

	generateWord() {
		let maxScore = 0;
		return chooseRandom(this.dict.map(word => {
			let score = this.getWordScore(word);
			if (score > maxScore) maxScore = score;
			return { word, score };
		}).filter(({ score }) => maxScore - score < 10)).word;
	}
}

export default LetterUsageSolver;
