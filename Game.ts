import { Result } from './Result';

export type First = 'Play' | 'Draw';
type MulliganNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export class Game {
  constructor (
    readonly first: First, 
    readonly yourMulligan: MulliganNumber,
    readonly opponentMulligan: MulliganNumber,
    readonly result: Result
  ) {}
}
