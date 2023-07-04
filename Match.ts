import { Game, First } from './Game';
import { Result, ResultUtils } from './Result';

export class Match {
  private readonly _matchFirst: First; 
  private readonly _result: Result;
  constructor (
    readonly opponentDeck: string,
    readonly game1: Game,
    readonly game2: Game,
    readonly game3?: Game) {
      this._matchFirst = game1.first;
      this._result = ResultUtils.calculateResult(this);
    }

    get result(): Result {
      return this._result;
    }
}
