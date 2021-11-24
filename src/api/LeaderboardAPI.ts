import { AxiosPromise } from 'axios';

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

  addUserToLeaderboard(data: AddUserToLeaderboard): AxiosPromise<void> {
    return http.post(this.endpoint, data);
  }

  getAllLeaderboards(data: GetAllLeaderboards): AxiosPromise<LeaderboardData[]> {
    return http.post(`${this.endpoint}/all`, data);
  }

  getTeamLeaderboard(teamName: string, data: GetAllLeaderboards): AxiosPromise<LeaderboardData> {
    return http.post(`${this.endpoint}/${teamName}`, data);
  }
}
