import axios from 'axios';
import AppConfig from '../../config/config';

class AppClient {
  _getHttpClient() {
    const appHttpClient = axios.create({
      baseURL: AppConfig.getConfig('BONUZ_API_URL')
    })
    return appHttpClient;
  }
  async getUsers() {
    try {
      const httpClient = this._getHttpClient();
      const pathAlliances = '/users';
      const response = await httpClient.get(pathAlliances);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AppClient;