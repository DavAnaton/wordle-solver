import AbstractSolver from './AbstractSolver';

export class LetterUsageSolver extends AbstractSolver{
	generateWord() {
		const gameState = JSON.parse(window?.localStorage?.gameState || '{}');
		return gameState.solution.toUpperCase();
	}
}

export default LetterUsageSolver;
