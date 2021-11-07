import {AuthAPI, LoginData, SignUpData} from '../api/AuthAPI';

class Controller {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: SignUpData) {
    try {
      await this.api.signUp(data).then(() => {
        return this.fetchUser();
      });
    } catch (e) {
      console.error(e);
    }
  }

  async login(data: LoginData) {
    try {
      await this.api.login(data).then(() => {
        return this.fetchUser();
      });
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      return this.api.logout();
    } catch (e) {
      console.error(e);
    }
  }

  async fetchUser() {
    try {
      return this.api.read();
    } catch (e) {
      console.error(e);
    }
  }
}

export const AuthController = new Controller();
