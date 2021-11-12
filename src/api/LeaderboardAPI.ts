import { http } from './http';

export interface AddUserToLeaderboard {
  data: {
    teamName: string;
    yaFriendsScore: number;
  };
  ratingFieldName: string;
  teamName: string;
}

export interface GetAllLeaderboards {
  ratingFieldName: string;
  cursor: number;
  limit: number;
}

export interface LeaderboardData {
  data: {
    teamName: string;
    yaFriendsScore: number;
  };
}

export class LeaderboardAPI {
  protected endpoint: string;

  constructor() {
    this.endpoint = '/leaderboard';
  }

  addUserToLeaderboard(data: AddUserToLeaderboard): Promise<void> {
    return http.post(this.endpoint, data);
  }

  getAllLeaderboards(data: GetAllLeaderboards): Promise<LeaderboardData> {
    return http.post(`${this.endpoint}/all`, data);
  }

  getTeamLeaderboard(teamName: string, data: GetAllLeaderboards): Promise<LeaderboardData> {
    return http.post(`${this.endpoint}/${teamName}`, data);
  }
}
