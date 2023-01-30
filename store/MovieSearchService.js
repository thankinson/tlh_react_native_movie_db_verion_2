import {API_URL} from "@env"

class MovieService {
  constructor(search){
    this.search = search
  }
  async searchMovie(){
      const response = await fetch(`${API_URL}${this.search}`);
      const data = await response.json();
      return data.results
  };
};

export default (MovieService)