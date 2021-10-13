import axios from "axios";

const API_URL = "http://yantodev.ddns.net:8080/api/";

class Api {
  getUser() {
    return axios.get(API_URL + "users");
  }
}
export default new Api();
