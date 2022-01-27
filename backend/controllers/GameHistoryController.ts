import GameHistory, { GameHistoryCreationAttributes } from '../models/GameHistory';

export const GameHistoryController = {
  create(gameHistory: GameHistoryCreationAttributes) {
    return GameHistory.create(gameHistory);
  },
  getByUserId(user_id: number) {
    return GameHistory.findOne({ where: { user_id } });
  },
};
