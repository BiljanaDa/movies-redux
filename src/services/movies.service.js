import HttpService from "./Http.Service";

export default class MoviesService extends HttpService {
  static  getAllMovies = async(searchTerm="") =>{
  let endpoint = `/movies/?search=${searchTerm}`;
  const { data } = await this.client.get(endpoint);
    return data;
  }

  static async getSingle(id) {
    const response = await this.request({
      method: "GET",

      url: `/movie/${id}`,
    });
    return response;
  }
}
