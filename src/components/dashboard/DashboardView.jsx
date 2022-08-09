import { Card } from "react-bootstrap";

const DashboardView = ({ conferencesList }) => {
  return (
    <div>
      {conferencesList &&
        conferencesList.length > 0 &&
        conferencesList.map((conf) => {
          return (
            <div>
              <Card className="mb-3">
                <Card.Header>
                  <h5>
                    {conf.title} by {conf.author}
                  </h5>
                </Card.Header>

                <Card.Body>
                  <p>
                    {conf.date} - {conf.address}
                  </p>
                  <p>
                    <a href={conf.link} target="_blank" rel="noreferrer">
                      join conference live
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default DashboardView;
