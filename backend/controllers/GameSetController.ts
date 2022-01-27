import { makeRandomString } from '../utils/makeRandomString';
import GameSet, { GameSetCreationAttributes } from '../models/GameSet';
import User from '../models/User';

const LINK_LENGTH = 10;

export const GameSetController = {
  getById(id: number) {
    return GameSet.findOne({ where: { id } });
  },
  getByLink(link: string) {
    return GameSet.findOne({ where: { link } });
  },
  async create(totalGames: number) {
    let link = makeRandomString(LINK_LENGTH);

    while (true) {
      const possibleExistedLink = await GameSetController.getByLink(link);

      if (!possibleExistedLink) {
        return GameSet.create({ link, totalGames });
      }

      link = makeRandomString(LINK_LENGTH);
    }
  },

  async update(id: number, gameSetPatch: Partial<GameSetCreationAttributes>) {
    return User.update(gameSetPatch, { where: { id } });
  },
};
