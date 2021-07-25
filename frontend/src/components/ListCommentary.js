import { Col, Row } from 'reactstrap';
import { _get } from "../Utils";
import React, { useState, useEffect } from 'react';
import { Spinner,Alert } from 'reactstrap';
export const ListCommentary = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        getCommentarys()
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    setError(null);
                },
                (error) => {
                    setItems([])
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return (
        <div>
            <Spinner hidden={isLoaded} children="" style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Alert hidden={!error} color="danger">
                error al cargar los comentarios {">"}:c
            </Alert>
            {items.map((commentary, i) =>
                <div className="commentary">
                    <Row key={i}>
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
async function getCommentarys() {
    const request = await _get({ uri: "/api/comentarys"});
    return request;
}
export default ListCommentary;