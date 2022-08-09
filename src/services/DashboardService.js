import APIConstants from "../constants/APIConstants";

export default class DashboardService {
  getList = async (param) => {
    debugger;
    const res = await fetch(APIConstants.demoApi)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server response wasn't OK");
        }
      })
      .then((actualData) => {
        console.log(actualData);
        const resArr = [];
        if (actualData && actualData.length > 0) {
          actualData.map((img) => {
            const imgObj = {
              url: img.download_url || "",
              id: img.download_url || "",
              author: img.download_url || "",
            };
            resArr.push(imgObj);
          });
        }

        return resArr;
      })
      .catch((err) => {
        console.log(err.message);
      });

    return res;
  };
}
