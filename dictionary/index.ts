import fs from 'fs';

export function readDict(){
	return fs.readFileSync('dictionary/words.txt').toString().split(' ');
}

export const dict = readDict();
