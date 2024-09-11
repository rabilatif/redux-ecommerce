import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;
const Api = {
  getProduct: () => {
    return axios({
      url: `${baseUrl}/products`,
      method: 'get',
    });
  },
  getUsersApi: () => {
    return axios({
      url: `${baseUrl}/users`,
      method: 'get',
    });
  },
};
export default Api;