import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input} from 'reactstrap';
import {validarInput} from './general.js'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    titulo,
    Action,
    Cajas
  } = props;
  let state={
    form:{
      nombre:'',
      email:'',
      comentario:''
    },
    valid:false
  }
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Form id="form">
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{titulo}</ModalHeader>
              <ModalBody>
                {Cajas.map((item,key) =>
                  <FormGroup key={item.key}>
                    <Label for={item.Name}>{item.Name}</Label>
                    <Input type={item.type} id={item.Name} className={item.Name} placeholder={item.placeholder} />
                  </FormGroup>
                )}
              </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={onClick}>Aceptar</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
  function onClick() {
    state.valid=true;
    const data = new FormData();
    Cajas.map(item=>{
      let caja=document.getElementById(item.Name);
      let dato=validarInput(caja);
      if (dato==='') {
        state.valid=false;
      }else {
        data.append(item.Name, dato);
      }
      return null;
    });
    if (state.valid) {
      Action(data);
      toggle();
    }
  }
}

export default ModalExample;
