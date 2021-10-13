import axios from "axios";

const API_URL = "http://yantodev.ddns.net:8080/api/";

class Api {
  getUser() {
    return axios.get(API_URL + "users");
  }

  getJurusan() {
    return axios.get(API_URL + "get-jurusan");
  }
}
export default new Api();
