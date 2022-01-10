import AbstractSolver from './AbstractSolver';
import { chooseRandom } from '../utils';

const LETTER_USAGE = 'EARIOTNSLCUDPMHGBFYWKVXZJQ';
export class RandomWordSolver extends AbstractSolver{
	generateWord() {
		return chooseRandom(this.dict);
	}
}

export default RandomWordSolver;