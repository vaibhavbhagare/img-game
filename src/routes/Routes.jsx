import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContainer from "../components/dashboard/DashboardContainer";
import NavbarContainer from "../components/header/Navbar";
import FeedbackContainer from "../components/feedback/FeedbackContainer";
const MainRoute = ({}) => {
  return (
    <>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/topic" element={<DashboardContainer />} />
          <Route path="/feedback" element={<FeedbackContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
