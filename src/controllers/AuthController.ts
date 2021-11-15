import { AuthAPI, LoginData, SignUpData } from '../api/AuthAPI';
// import { getData } from '../utils/getData';

class Controller {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: SignUpData) {
    try {
      await this.api.signUp(data);
      return await this.fetchUser();
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async login(data: LoginData) {
    try {
      await this.api.login(data);
      return await this.fetchUser();
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async logout() {
    try {
      return this.api.logout();
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async fetchUser() {
    try {
      return this.api.read().then(({ data }) => data);
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}

export const AuthController = new Controller();
