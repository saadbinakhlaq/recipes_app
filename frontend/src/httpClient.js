import axios from 'axios';

const httpClient = axios.create({
  baseURL: (process.env.RECIPES_BASE_URL || 'http://localhost:4567/api/v1'),
  timeout: 5000
})

export default httpClient;