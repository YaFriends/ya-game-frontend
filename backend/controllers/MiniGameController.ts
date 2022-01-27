import MiniGame from '../models/MiniGame';

export const MiniGameController = {
  getAll() {
    return MiniGame.findAll();
  },
  getById(id: number) {
    return MiniGame.findOne({ where: { id } });
  },
};
