import UserIOChannel from './io-channels/UserIOChannel';
import LetterUsageSolver from './solvers/LetterUsageSolver';

const io = new UserIOChannel();
const solver = new LetterUsageSolver();
do {
	const word = solver.getWord();
	const result = io.tryWord(word);
	solver.answer(result);
	if(io.isSuccess()) {
		console.log(`The word was ${word}`);
		break;
	}else if(io.isFailure()){
		console.log('You lost, sorry.');
		break;
	}

} while (true);