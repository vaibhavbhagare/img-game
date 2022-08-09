import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContainer from "../components/dashboard/DashboardContainer";
import NavbarContainer from "../components/header/Navbar";
import FeedbackContainer from "../components/feedback/FeedbackContainer";
import TopicContainer from "../components/topic/TopicContainer";

const MainRoute = ({}) => {
  return (
    <>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/feedback" element={<FeedbackContainer />} />
          <Route path="/topic" element={<TopicContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
