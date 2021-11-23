import { UserAPI, UserUpdatePasswordProps, UserUpdateProfileProps } from '../api/UserAPI';
import { getData } from '../utils/getData';

import { AuthController } from './AuthController';

class Controller {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async updateProfile(data: UserUpdateProfileProps) {
    return this.api
      .updateProfile(data)
      .then(() => AuthController.fetchUser())
      .catch(e => {
        throw Error(e);
      });
  }

  async updatePassword(data: UserUpdatePasswordProps) {
    return this.api
      .updatePassword(data)
      .then(response => getData(response))
      .catch(e => {
        throw new Error(e);
      });
  }
}

export const UserController = new Controller();
