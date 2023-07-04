import { Game } from './Game';
import { Match } from './Match';
const rounds = 1;

for (let i = 1; i <= rounds; i++) {
  
  const opponentDeck = 'Burn';
  
  const game1first = 'Play';
  const game1YourMulligan = 1;
  const game1OpponentMulligan = 0;
  const game1Result = 'Loss';
  const game1 = new Game(game1first, game1YourMulligan, game1OpponentMulligan, game1Result);

  const game2first = 'Draw';
  const game2YourMulligan = 1;
  const game2OpponentMulligan = 0;
  const game2Result = 'Loss';
  const game2 = new Game(game2first, game2YourMulligan, game2OpponentMulligan, game2Result);
  
  const game3first = 'Play';
  const game3YourMulligan = 1;
  const game3OpponentMulligan = 0;
  const game3Result = 'Win';
  const game3 = new Game(game3first, game3YourMulligan, game3OpponentMulligan, game3Result);

  const match = new Match(opponentDeck, game1, game2, game3);
  console.log(match.result);
}

