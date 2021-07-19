
import React, { useState } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
function Commentary() {
  const [editForm, setEditForm] = useState({});
  return (
    <div className="commentary">
      <div className="list"></div>
      <div className="form">
        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input onChange={(e)=>setEditForm(Object.assign(editForm,{name:e.target.value}))}type="name" name="name" id="name" placeholder="Juan Perez" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input onChange={(e)=>setEditForm(Object.assign(editForm,{email:e.target.value}))} type="email" name="email" id="email" placeholder="Juan@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="comentary">Comentario</Label>
          <Input onChange={(e)=>setEditForm(Object.assign(editForm,{commentary:e.target.value}))} type="textarea" name="text" id="comentary" />
        </FormGroup>
        <FormGroup>
          <Button onClick={()=>console.log(editForm)}>enviar</Button>
        </FormGroup>
      </div>
    </div>
  );
}

export default Commentary;