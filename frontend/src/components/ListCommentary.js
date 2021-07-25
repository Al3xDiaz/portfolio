import { Col, Row } from 'reactstrap';
import { Spinner,Alert } from 'reactstrap';
export const ListCommentary = (props) => {
    return (
        <div>
            <Spinner hidden={props.isLoaded} children="" style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Alert hidden={!props.error} color="danger">
                error al cargar los comentarios {">"}:c
            </Alert>
            {props.items.map((commentary, i) =>
                <div key={i} className="commentary">
                    <Row>
                        <Col md='1'>
                            <img src='/logo512.png' className="App-logo" alt="logo" />
                        </Col>
                        <Col md="10" className="center-h">{commentary.name}</Col>
                    </Row>
                    <Row>
                        <Col>{commentary.commentary}</Col>
                    </Row>
                </div>
            )}
        </div>
    )
}
export default ListCommentary;