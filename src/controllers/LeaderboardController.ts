import { LeaderboardAPI, AddUserToLeaderboard, GetAllLeaderboards } from '../api/LeaderboardAPI';

class Controller {
  private api: LeaderboardAPI;

  constructor() {
    this.api = new LeaderboardAPI();
  }

  addUserToLeaderboard(data: AddUserToLeaderboard) {
    try {
      this.api.addUserToLeaderboard(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getAllLeaderboards(data: GetAllLeaderboards) {
    try {
      return this.api.getAllLeaderboards(data);
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async getTeamLeaderboard(teamName: string, data: GetAllLeaderboards) {
    try {
      return this.api.getTeamLeaderboard(teamName, data);
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}

export const LeaderboardController = new Controller();
