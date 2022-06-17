export function chooseRandom(array=[]){
	return array[Math.floor(array.length * Math.random())];
}

export function countLetters(word=''){
	return word.split('').reduce((o, l) => {
		o[l] = (o[l] || 0)+1;
		return o;
	}, {});
}

const DEBUG = true;
export function dbg(...params){
	if(DEBUG) console.log(...params);
}
