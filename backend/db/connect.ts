import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import User from '../models/User';
import PostComment from '../models/PostComment';
import Like from '../models/Like';
import Post from '../models/Post';
import MiniGame from '../models/MiniGame';
import GameSet from '../models/GameSet';
import GameHistory from '../models/GameHistory';
import GameSetBan from '../models/GameSetBan';
import GameSetMiniGame from '../models/GameSetMiniGame';
import GameSetPlayer from '../models/GameSetPlayer';

const sequelizeOptions: SequelizeOptions = {
  host: process.env.POSTGRES_HOST || 'psql',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dialect: 'postgres',
};

const sequelize = new Sequelize(sequelizeOptions);

sequelize.addModels([
  User,
  GameHistory,
  GameSet,
  Like,
  MiniGame,
  Post,
  PostComment,
  GameSetBan,
  GameSetMiniGame,
  GameSetPlayer,
]);

export const dbConnect = async () => {
  try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync(); // Синхронизация базы данных
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
