import React, {Component} from 'react';
//import { Badge } from 'reactstrap';
import {Comentarios} from './Comentarios'
import Layout from './Layout'
export class Comentar extends Component{
  constructor(props) {
    super(props);
    this.state=
      {
        comentario: new ComentarioDetalle(),
        comentarios:[]
      }
  }
  render(){
    return (
      <Layout className="section">
            <h1>Comentarios </h1>
        <Comentarios />
      </Layout>);
  }
}
class ComentarioDetalle {
  constructor(nombre,email,comentario) {
    this.nombre=nombre;
    this.email=email;
    this.comentario=comentario;
  }
}
