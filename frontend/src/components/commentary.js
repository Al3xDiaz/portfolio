import ListCommentary from './ListCommentary';
import { postCommentary, getCommentarys } from '../Request/commentary';
import { Button, FormGroup, Label, Input, Col, Row, Alert } from 'reactstrap';
import React, { useState, useEffect } from 'react';
function Commentary() {
  const [editForm, setEditForm] = useState({});
  const [status, setStatus] = useState(null);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  function cleanForm(){
    const keys= Object.keys(editForm)
    keys.forEach(i => {
      document.getElementById(i).value=''
    });
  }
  function submit() {
    if (!editForm)return;
    postCommentary(editForm)
      .then(
        () => {
          getCommentarys()
            .then((data) => {
              setItems(data)
              cleanForm()
            })
          setStatus("success");
          cleanForm()
        },
        () => {
          setStatus("error");
        })
  }
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
      <Alert hidden={!(status === "error")} color="danger">
        error al enviar el commentario {">"}:c
      </Alert>
      <Alert hidden={!(status === "success")} color="success">
        su comentario fue enviado con exito :3
      </Alert>
      <Row>
        <Col sm={{ size: 9, offset: 3 }}>
          <div>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input onChange={(e) => setEditForm(Object.assign(editForm, { name: e.target.value }))} type="name" name="name" id="name" placeholder="Juan Perez" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input onChange={(e) => setEditForm(Object.assign(editForm, { email: e.target.value }))} type="email" name="email" id="email" placeholder="Juan@example.com" />
            </FormGroup>
            <FormGroup>
              <Label for="commentary">Comentario</Label>
              <Input onChange={(e) => setEditForm(Object.assign(editForm, { commentary: e.target.value }))} type="textarea" name="text" id="commentary" />
            </FormGroup>
            <FormGroup>
              <Button onClick={submit}>enviar</Button>
            </FormGroup>
          </div>
          <div className="list">
            <ListCommentary items={items} error={error} isLoaded={isLoaded} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Commentary;