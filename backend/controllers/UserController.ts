import User, { UserCreationAttributes } from '../models/User';

export const UserController = {
  create({ external_id, avatar_path, display_name }: UserCreationAttributes) {
    return User.create({ external_id, avatar_path, display_name });
  },
  updateById(id: number, UserData: UserCreationAttributes) {
    return User.update(UserData, { where: { id } });
  },
  deleteById(id: number) {
    return User.destroy({ where: { id } });
  },
  getById(id: number) {
    return User.findOne({ where: { id } });
  },
  getByExternalId(external_id: number) {
    return User.findOne({ where: { external_id } });
  },
};
