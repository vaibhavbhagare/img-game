import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContainer from "../components/dashboard/DashboardContainer";
import NavbarContainer from "../components/header/Navbar";
import FeedbackContainer from "../components/feedback/FeedbackContainer";
import TopicContainer from "../components/topic/TopicContainer";
import { Suspense } from "react";

const MainRoute = ({}) => {
  return (
    <>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading..."}>
                <DashboardContainer />
              </Suspense>
            }
          />
          <Route
            path="/feedback"
            element={
              <Suspense fallback={"Loading..."}>
                <FeedbackContainer />
              </Suspense>
            }
          />
          <Route
            path="/topic"
            element={
              <Suspense fallback={"Loading..."}>
                <TopicContainer />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
