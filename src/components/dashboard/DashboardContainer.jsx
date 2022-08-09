import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";
import DashboardView from "./DashboardView";

const DashboardContainer = () => {
  const [list, setList] = useState(null);
  const [selectedImg1, setSelectedImg1] = useState(null);
  const [selectedImg2, setSelectedImg2] = useState(null);

  const handleClickImage = (url) => {
    if (!selectedImg1) {
      const newList = [...list];
      newList &&
        newList.length &&
        newList.map((img) => {
          if (img.url === url && !img.isSelected) {
            img.isSelected = true;
          }
        });
      setList(newList);
      setSelectedImg1(url);
    } else if (!selectedImg2) {
      const newList = [...list];
      newList &&
        newList.length &&
        newList.map((img) => {
          if (img.url === url && !img.isSelected) {
            img.isSelected = true;
          }
        });
      setList(newList);
      setSelectedImg2(url);
    }
  };

  useEffect(() => {
    getImgList();
  }, []);

  const getImgList = async () => {
    // await fetch(APIConstants.demoApi)
    //   .then((response) => response.json())
    //   .then((actualData) => setList(actualData))
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    const dashboardService = new DashboardService();
    const res = await dashboardService.getList();
    setList(res);
  };

  return (
    <DashboardView
      selectedImg1={selectedImg1}
      selectedImg2={selectedImg2}
      list={list}
      handleClickImage={handleClickImage}
    />
  );
};

export default DashboardContainer;
