import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContainer from "../components/dashboard/DashboardContainer";
import HomeContainer from "../components/home/HomeContainer";
const MainRoute = ({}) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/dashboard" element={<DashboardContainer />} />
          <Route path="/home" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
