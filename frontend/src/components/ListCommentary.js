import { Col, Row } from 'reactstrap';
import { _get } from "../Utils";
import React, { useState, useEffect } from 'react';
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
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return (
        <div>
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
    const request = await _get({ uri: "/data.json"});
    //const request = await _get({ uri: "/api/comentarys"});
    data = request
    return request;
}
let data = []
export default ListCommentary;