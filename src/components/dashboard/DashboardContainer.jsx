import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";
import DashboardView from "./DashboardView";

const DashboardContainer = () => {
  const [conferencesList, setConferencesList] = useState([]);

  useEffect(() => {
    getConferences();
  }, []);

  const getConferences = () => {
    const list = new DashboardService().getList();
    setConferencesList(list);
  };

  return <DashboardView conferencesList={conferencesList} />;
};

export default DashboardContainer;
