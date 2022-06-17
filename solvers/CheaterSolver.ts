import AbstractSolver from './AbstractSolver';


export class CheaterSolver extends AbstractSolver{
	generateWord() {
		const gameState = JSON.parse(window?.localStorage?.gameState || '{}');
		return gameState.solution.toUpperCase();
	}
}

export default CheaterSolver;
