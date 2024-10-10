import http from "../http-common";

class BlogDataService {
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
    return http.get("/blogs/published", { headers });
  }

  async get(id) {
    const headers = await this.addTokenToHeaders();
    return http.get(`/blogs/${id}`, { headers });
  }

  async create(data) {
    const headers = await this.addTokenToHeaders();
    return http.post("/blogs", data, { headers });
  }

  async update(id, data) {
    const headers = await this.addTokenToHeaders();
    return http.put(`/blogs/${id}`, data, { headers });
  }

  async delete(id) {
    const headers = await this.addTokenToHeaders();
    return http.delete(`/blogs/${id}`, { headers });
  }

  async deleteAll() {
    const headers = await this.addTokenToHeaders();
    return http.delete(`/blogs`, { headers });
  }

  async findByTitle(title) {
    const headers = await this.addTokenToHeaders();
    return http.get(`/blogs?title=${title}`, { headers });
  }
}

export default new BlogDataService();