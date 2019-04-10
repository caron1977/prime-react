import axios from "axios";

export class CarService {
  getCarsSmall() {
    return axios.get("cars-small.json").then(res => res.data.data);
  }
}
