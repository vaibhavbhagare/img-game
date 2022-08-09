import APIConstants from "../constants/APIConstants";
import ConferencesJson from "../constants/ConferencesJson.json";
export default class DashboardService {
  getList = () => {
    //api call is here using axios
    return ConferencesJson;
  };
}
