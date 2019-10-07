import axios from 'axios';

class AppClient {
  _getHttpClient() {
    const appHttpClient = axios.create({
      baseURL: process.env.BONUZ_API_URL
    });
    return appHttpClient;
  }

  async getUsers() {
    try {
      const httpClient = this._getHttpClient();
      const response = await httpClient.get('/users');
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AppClient();