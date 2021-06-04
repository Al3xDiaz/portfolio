import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import {getIntRandom} from '../basico/general.js';
import '../css/Parejas.css';
import Layout from './Layout'
export class Parejas extends React.Component {
  constructor(props) {
    super(props);
    const lista1=this.crearLista(8);
    const lista2=this.crearLista(8)
    let lista=[];
    for (let i=0;i<8;i++){
      lista.push(lista1[i]);
      lista.push(lista2[i]);
    }

    this.state={
        lista:[]=lista,
        turnos:20,
        anterior:null,
    }
    this.crearLista=this.crearLista.bind(this);
    this.comparar=this.comparar.bind(this);
  }
  render(){
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <Button onClick={()=>{console.clear();console.log(this.state.lista);}}>reiniciar</Button>
              {this.state.turnos}
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Row className="fila">
                {this.state.lista.map((item,i)=>
                  <Col
                  md="3"
                  className="oculto columna"
                  data-id={i}
                  onClick={this.comparar}>
                  {item.valor}
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
  crearLista(items){
    const lista=[];
    lista.push({num:getIntRandom(1,items)});
    for (var i = 0; i < items; i++) {
      let valor=getIntRandom(1,items);
      for (var i = 0; i < lista.length; i++) {
        let item=lista[i].num;
        if (valor===item) {
          i=-1;
          valor=valor+1
          if (valor>items) {
            valor=1;
          }
        }
      }
      lista.push({num:valor});
    }
    return lista;
  }
  comparar(btn){
    if (this.state.turnos>0) {
      const indice=btn.target.dataset.id;
      const indiceAnterior=this.state.anterior;
      const lista=this.state.lista;
      this.state.lista[indice].valor=this.state.lista[indice].num;
      this.setState(this.state);
      if (indiceAnterior===null) {
        this.state.anterior=indice;
      }else {
        if (lista[indiceAnterior].num!==lista[indice].num) {
          setTimeout(()=>{
            lista[indiceAnterior].valor=undefined;
            lista[indice].valor=undefined;
            this.state.lista=lista;
            this.setState(this.state);
          }, 3000);

        }
        this.state.anterior=null;
        this.state.turnos=this.state.turnos-1;
      }
    }
  }

}
export default Parejas;
