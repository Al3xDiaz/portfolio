import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/imagenes.css'
import imagen from '../Utilidades/imagen.jpg';

export class Home extends Component {
  static displayName = Home.name;
  render () {
    return (
        <div>
          <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }}>
              <Row>
                  <Col xs="3">
                      <div className="pull-left image">
                          <img src={imagen} className="img-circle" alt="User Image" />
                      </div>
                  </Col>
                  <Col xs="9">
                      <h3>Historia y formacion Profecional</h3>
                      <p>
                        Nacìo el 22 de noviembre de 1996, en San Pedro Sula, Cortes, Honduras.
                        Hijo de Jose Anael Diaz Guevara y Mirian Suyapa Sierra Villamil.
                      </p>
                      <p>
                        Realizo sus estudios en la escuela Dionisio de Herrera, en el colegio
                        Jose Trinidad Reyes reciviendo asi el <a TARGET="_blank" href="titulo.pdf">
                        Titulo</a> de BTP en Informatica. En la fecha 03/2019, inicio 
                        los <a href="#">Cursos</a> por parte del convenio de la Asosiacion Hondureña 
                        de Maquiladores
                        (<a TARGET="_blank" href="http://www.ahm-honduras.com/">AHM</a>) y la 
                        Fundacion Nacional para el Desarrollo de Honduras
                        (<a TARGET="_blank" href="http://www.funadeh.org/">FUNADEH</a>) 
                        llamado <a target="_blank" href="http://www.ahm-honduras.com/?p=3123" >Academia de Programadores</a>. Participando asi en la segunda 
                        promocion.
                      </p>
                      <p>
                        Para Ingresar en el proyecto anterior, realizo varias pruebas y filtros.
                        Donde recibio una certificacion <a target="_blank" href="MTA.pdf" >MTA</a> y
                        <a target="_blank" href="MOS.pdf"> MOS</a>.
                      </p>
                      <p>
                        En la Actualidad estudia en la Universidad Autonoma De Honduras,
                        Ubicada en el valle de sula (<a target="_blank" href="https://vallesula.unah.edu.hn/" >
                        UNAH-VS</a>). A su vez recibe cursos en una plataforma en linea llamada <a target="_blank" href="https://platzi.com/">
                          Platzi
                        </a>.
                      </p>
                      <h3>Pasatiempos</h3>
                      <p>
                        Alex a sus {this.edad()} años de edad, tiene pasion por la Fisica
                        (Astronomia, el mundo sub-atòmico, termodinamica, etc), Tecnologia,
                        Matematica,Comedia, Ciencia Ficcion, fantasia, literatura, etc.
                      </p>
                  </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
  edad(){
    const fecha = new Date();
    const anio = fecha.getFullYear();
    return anio-1997;
  }
}
