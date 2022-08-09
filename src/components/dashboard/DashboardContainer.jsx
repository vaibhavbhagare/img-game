import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";
import DashboardView from "./DashboardView";
import DashboardGridView from "./DashboardGridView";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row } from "react-bootstrap";

const DashboardContainer = () => {
  const [conferencesList, setConferencesList] = useState([]);

  useEffect(() => {
    getConferences();
  }, []);

  const getConferences = () => {
    const list = new DashboardService().getList();
    setConferencesList(list);
  };

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <h1>Conferences</h1>
          <Tabs
            defaultActiveKey="list"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="list" title="Card View">
              <DashboardView conferencesList={conferencesList} />
            </Tab>
            <Tab eventKey="grid" title="Grid View">
              <DashboardGridView conferencesList={conferencesList} />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardContainer;
