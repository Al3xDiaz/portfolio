import { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row, Col
} from 'reactstrap';
import '../components/Utils.css'
const Courses = () => {
    const [CoursesArray, SetCoursesArray] = useState([]);
    fetch('/Courses.json')
        .then(async (res) => {
            const array = (await res.json())
            CoursesArray.length || SetCoursesArray(array);
        })
        .catch(err => {

        });
    return (
        <Row>
            {CoursesArray.map((item, i) => {
                return (
                    <Col sm={{ size: 3, offset:item.offset }} key={i}>
                        <Card>
                            <CardImg top width="100%" src={item.image} alt={item.Name} />
                            <CardBody>
                                <CardTitle tag="h5">{item.Name}</CardTitle>
                                <CardText>{item.description}</CardText>
                                <CardSubtitle>{item.subTitle}</CardSubtitle>
                                <Button href={item.detail}>Detalles</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}
export default Courses;