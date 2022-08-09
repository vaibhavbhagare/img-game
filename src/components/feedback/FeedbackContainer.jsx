import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedbackView from "./FeedbackView";
import DashboardService from "../../services/DashboardService";

const FeedbackContainer = () => {
  const [conferencesList, setConferencesList] = useState([]);
  const [selectedConf, setSelectedConf] = useState(null);
  const [comment, setComment] = useState("");
  useEffect(() => {
    getConferences();
  }, []);

  const getConferences = () => {
    const list = new DashboardService().getList();
    if (list && list.length > 0) {
      const res = list.map((conf) => {
        return {
          name: conf.title,
          value: conf.title,
        };
      });
      setConferencesList(res);
    }
  };

  const handleSend = () => {
    toast.success("Feedback sent Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
      theme: "colored",
    });
    setSelectedConf(null);
    setComment("");
  };

  return (
    <>
      <FeedbackView
        conferencesList={conferencesList}
        selectedConf={selectedConf}
        setSelectedConf={setSelectedConf}
        comment={comment}
        setComment={setComment}
        handleSend={handleSend}
      />
      <ToastContainer />
    </>
  );
};

export default FeedbackContainer;
