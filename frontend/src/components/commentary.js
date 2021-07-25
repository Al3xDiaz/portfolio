
import React, { useState } from 'react';
import ListCommentary from './ListCommentary';
import { Button, FormGroup, Label, Input, Col, Row } from 'reactstrap';
function Commentary() {
  const [editForm, setEditForm] = useState({});
  return (
    <Row>
        <Col sm={{ size: 9, offset: 3 }}>
          <div className="list">
            <ListCommentary />
          </div>
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
              <Label for="comentary">Comentario</Label>
              <Input onChange={(e) => setEditForm(Object.assign(editForm, { commentary: e.target.value }))} type="textarea" name="text" id="comentary" />
            </FormGroup>
            <FormGroup>
              <Button onClick={() => console.log(editForm)}>enviar</Button>
            </FormGroup>
          </div>
        </Col>
    </Row>
  );
}

export default Commentary;