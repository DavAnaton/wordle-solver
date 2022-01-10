import io from './io/fakeWord';
import solver from './methods/letterUsage';

do {
	const word = solver.getWord();
	const result = io.tryWord(word);
	console.log(`Word:   ${word}\nResult: ${result}\n\n`);
	solver.answer(result);
} while (!(io.isSuccess() || io.isFailure()));