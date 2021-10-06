// const API_URL = "http://yantodev.ddns.net/data/api_server/";
const API_URL = "http://192.168.2.254:8080/restapi/";

class Api {
  getUser = () => {
    return fetch(API_URL + "users", {
      method: "GET",
    })
      .then(function (respon) {
        console.log(`respon`, respon);
        return respon.json();
      })
      .then(function (data) {
        let allData = JSON.parse(JSON.stringify(data));
        console.log("data user", allData);
        return allData;
      });
  };
}
export default new Api();
