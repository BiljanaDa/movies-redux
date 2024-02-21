import HttpService from "./Http.Service";

export default class MoviesService extends HttpService {
    static async getAllMovies() {
        const response = await this.request({
            method: "GET",
            url: "/movies"
        });
        return response;
    }
}