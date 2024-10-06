import http from "../http-common";

class SanityDataService {
  constructor() {
    this.token = null;
  }

  // Get JWT token
  async getToken() {
    if (!this.token) {
      const response = await http.get('/generate-token');
      this.token = response.data.token;
    }
    return this.token;
  }

  // Add token to request headers
  async addTokenToHeaders(headers = {}) {
    const token = await this.getToken();
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  async getAll() {
    const headers = await this.addTokenToHeaders();
    return http.get("/sanity", { headers });
  }

  async get(id) {
    const headers = await this.addTokenToHeaders();
    return http.get(`/sanity/${id}`, { headers });
  }
}

export default new SanityDataService();