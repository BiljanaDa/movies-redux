import HttpService from "./Http.Service";

export default class MoviesService extends HttpService {
  static async getAllMovies(searchTerm, genre) {
    const params = {};
    if (searchTerm) {
      params.searchTerm = searchTerm;
    }
    if (genre) {
      params.genre = genre;
    }
    const response = await this.request({
      method: "GET",
      url: "/movies",
      params,
    });
    return response;
  }

  static async getSingle(id) {
    const response = await this.request({
      method: "GET",

      url: `/movie/${id}`,
    });
    return response;
  }
}
