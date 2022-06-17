import {GOOD_LETTER, BAD_LETTER, WRONG_POSITION} from './constants';

export type LetterResult = typeof GOOD_LETTER | typeof BAD_LETTER | typeof WRONG_POSITION;

export type WordResult = string;

export type Word = string;