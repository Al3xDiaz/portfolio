import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
  , NavLink,Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./css/index.css"
function Profile(props) {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div className="center-v">
      <Container className="center-h">
        <Row>
          <Col sm="6">
            <Card className="center-h">
              <CardImg className="profile" top width="10%" src="https://res.cloudinary.com/dd7jrtxu5/image/upload/v1607886191/Alex/imagen_cjbso3.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Alex Diaz</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Software developer Backend</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="link" tag={Link} to="/alexdiaz">ver mas</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Profile;