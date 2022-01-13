import AbstractSolver from './AbstractSolver';
import { chooseRandom } from '../utils';


export class RandomWordSolver extends AbstractSolver{
	generateWord() {
		return chooseRandom(this.dict);
	}
}

export default RandomWordSolver;
