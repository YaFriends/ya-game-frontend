export type MiniGameConfig = {
  icon: string;
  name: string;
  canvasId: string;
  teams: Team[];
};

export type Team = {
  players: UserData[];
};

export type MiniGameFinishResponse = {
  winner: Team;
};
