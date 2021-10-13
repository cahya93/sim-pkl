import { combineReducers } from "redux";
import jurusanReduser from "./jurusan";

import Users from "./users";

export default combineReducers({
  Users: Users,
  Jurusan: jurusanReduser,
});
