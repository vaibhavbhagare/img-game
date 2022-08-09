import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SelectSearch from "react-select-search";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const FeedbackView = ({
  conferencesList,
  selectedConf,
  setSelectedConf,
  setComment,
  comment,
  handleSend,
}) => {
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <Container>
      <Row className="mt-3">
        <h1>Conferences Feedback</h1>
        <div>
          <Card className="mb-3">
            <Card.Header>
              <h5>Add Feedback</h5>
            </Card.Header>

            <Card.Body>
              <Col md={6}>
                <SelectSearch
                  options={conferencesList}
                  className="select-search rounded-search input-field select-box"
                  value={selectedConf}
                  onChange={(selectedValue) => setSelectedConf(selectedValue)}
                  search={true}
                  placeholder="Select conference"
                />
                <div className="mt-3 mb-3">
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      value={comment}
                      onChange={onChangeHandler}
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </div>
                <Button
                  variant="primary"
                  style={{ float: "right" }}
                  onClick={() => handleSend()}
                >
                  Send
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default FeedbackView;
