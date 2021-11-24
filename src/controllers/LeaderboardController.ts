import { LeaderboardAPI, AddUserToLeaderboard, GetAllLeaderboards } from '../api/LeaderboardAPI';
import { getData } from '../utils/getData';

class Controller {
  private api: LeaderboardAPI;

  constructor() {
    this.api = new LeaderboardAPI();
  }

  addUserToLeaderboard(data: AddUserToLeaderboard) {
    return this.api
      .addUserToLeaderboard(data)
      .then(response => getData(response))
      .catch(e => {
        throw Error(e);
      });
  }

  async getAllLeaderboards(data: GetAllLeaderboards) {
    return this.api
      .getAllLeaderboards(data)
      .then(response => getData(response))
      .catch(e => {
        throw Error(e);
      });
  }

  async getTeamLeaderboard(teamName: string, data: GetAllLeaderboards) {
    return this.api
      .getTeamLeaderboard(teamName, data)
      .then(response => getData(response))
      .catch(e => {
        throw Error(e);
      });
  }
}

export const LeaderboardController = new Controller();
