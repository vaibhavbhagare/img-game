import { Card, Container, Row, Col } from "react-bootstrap";

const TopicView = () => {
  return (
    <Container>
      <Row className="mt-3">
        <h1>Conferences Topic</h1>
        <div>
          <Card className="mb-3">
            <Card.Header>
              <h5>Topics</h5>
            </Card.Header>

            <Card.Body>
              <Col>Requirement not clear</Col>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default TopicView;
