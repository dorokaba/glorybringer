import { Match } from './Match';

export type Result = 'Win' | 'Loss' | 'Draw';

export class ResultUtils {
  /**
   * Calculate the match result based on the game results.
   * @param match 
   * @returns 
   */
  static calculateResult(match: Match): Result {
    let position = this.convertToNumber(match.game1.result);
    position += this.convertToNumber(match.game2.result);
    position += this.convertToNumber(match?.game3?.result);

    return this.convertToResult(position);
  }
  
  /**
   * Convert a result to number to calculate the match result.
   * Win: 1, Loss: -1, Draw: 0
   */
  private static convertToNumber(result: Result | undefined): -1 | 0 | 1 {
    switch (result) {
    case 'Win':
      return 1;
    case 'Loss':
      return -1;
    case 'Draw':
    default:
      return 0;
    }
  }
  
  private static convertToResult(resultNumber: number): Result {
    switch (resultNumber) {
    case 1:
      return 'Win';
    case 0:
      return 'Draw';
    case -1:
      return 'Loss';
    default:
      throw new Error();
    }
  }
}