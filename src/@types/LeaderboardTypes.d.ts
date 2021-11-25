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