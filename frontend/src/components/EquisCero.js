import React, {Component} from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import '../css/EquisCero.css'
import imgX from '../Utilidades/x.png';
import img0 from '../Utilidades/0.png';
import {getIntRandom} from '../basico/general.js';
import Layout from './Layout'
export class EquisCero extends Component {
  constructor(props) {
    super(props);
    this.state={
      filas:[
        {value:''},{value:''},{value:''},
        {value:''},{value:''},{value:''},
        {value:''},{value:''},{value:''},
      ],
      turno:'X',
      gameOver:false,
      turnos:0,
    }
    this.verificar=this.verificar.bind(this);
  }
  render(){        
    if(this.state.turno==="0" & !this.state.gameOver & this.state.turnos<9){
      let posicion=getIntRandom(0,8);
      this.state.filas=this.PosicionCPU(this.state.filas,posicion);
      this.state.turno="X";
      this.state.turnos+=1;
    }
    for (var i = 0; i < 8; i++) {
      this.verificar(this.state.filas[i],this.state.filas[i+1],this.state.filas[i+2]);
      i=i+2;
    }
    for (var i = 0; i < 3; i++) {
      this.verificar(this.state.filas[i],this.state.filas[i+3],this.state.filas[i+6]);
    }
    this.verificar(this.state.filas[0],this.state.filas[4],this.state.filas[8]);
    this.verificar(this.state.filas[2],this.state.filas[4],this.state.filas[6]);
    console.log(this.state);
    
    return (
      <Layout>
      <Container>
        <Row>
          <Col>
            <Button onClick={()=>{
              let estado=this.state;
              estado.filas=[
                {value:''},{value:''},{value:''},
                {value:''},{value:''},{value:''},
                {value:''},{value:''},{value:''},
              ];
              estado.gameOver=false;
              estado.turnos=0;
              this.setState(estado);
            }} color="primary">Reiniciar</Button>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Row className="tablero">
            {this.state.filas.map((fila,i)=>
                <div key={i} onClick={(btn)=>{
                  let estado=this.state;
                  if (!estado.gameOver) {
                    if (estado.filas[i].value==="") {
                      estado.filas[i].value=estado.turno;
                      estado.turno=estado.turno==="X"?"0":"X";
                      estado.turnos+=1;
                      this.setState(estado);
                    }
                  }                  
                  
                }}
                 className={(fila.select!==undefined?'encendido':'apagado')+" puesto c"+i}>
                 {fila.value!==""?<img className="EquisCero" src={fila.value==="X"?imgX:img0} />:'m'}

                 </div>
            )}
            </Row>
          </Col>
        </Row>
      </Container>
      </Layout>
    );
  }
  // A es el primer obejto que se va a verificar
  // B es el segundo, C el tercero
  // se va a verificar si los tres tienen el mismo valor
  verificar(a,b,c){
    if (a.value !=='' && b.value!=='' && c.value!=='') {
      if (a.value === b.value && c.value=== b.value) {
        a.select=true;
        b.select=true;
        c.select=true;
        this.state.gameOver=true;
      }
    }
  }
  PosicionCPU(lista,posicion){
    for (let i=0; i<lista.length;i++){
      if(lista[posicion].value===''){
        lista[posicion].value="0"
        i=9;
      }else{
          posicion=posicion<8?posicion+1:0;
          i=0;
        }
    }
    return lista; 
  }
}
