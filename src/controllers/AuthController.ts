import { AuthAPI, LoginData, SignUpData } from '../api/AuthAPI';
// import { getData } from '../utils/getData';

class Controller {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: SignUpData) {
    return this.api
      .signUp(data)
      .then(() => this.fetchUser())
      .catch(e => {
        throw Error(e);
      });
  }

  async login(data: LoginData) {
    return this.api
      .login(data)
      .then(() => this.fetchUser())
      .catch(e => {
        throw Error(e);
      });
  }

  async logout() {
    return this.api.logout().catch(e => {
      throw Error(e);
    });
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
