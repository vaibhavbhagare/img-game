import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardView = ({
  selectedImg1,
  selectedImg2,
  list,
  handleClickImage,
}) => {
  return (
    <Container>
      <div>
        <Link to="/home">Go to home</Link>
      </div>
      <Row className="mb-2">
        <h4>Upload/Select Image</h4>
        <Col className="">
          <Card className="custom-card">
            {selectedImg1 ? (
              <Image src={selectedImg1} width="100" className="top-img" />
            ) : (
              <input type="file" accept="image/png, image/gif, image/jpeg" />
            )}
          </Card>
        </Col>
        <Col className="">
          <Card className="custom-card">
            {selectedImg2 ? (
              <Image src={selectedImg2} width="100" className="top-img" />
            ) : (
              <input type="file" accept="image/png, image/gif, image/jpeg" />
            )}
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <h4>Image List</h4>
        {list &&
          list.length > 0 &&
          list.map((img) => {
            return (
              <Col xs={3} className="col-custom" key={img.id}>
                <Card className="bottom-card" key={img.id + "card"}>
                  <Card.Body
                    key={img.id + "body"}
                    onClick={() => handleClickImage(img.url)}
                    className={`${img.isSelected ? "selected" : ""}`}
                  >
                    <Image
                      key={img.url}
                      className="img-card"
                      src={img.url}
                      alt={img.author}
                    />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default DashboardView;
