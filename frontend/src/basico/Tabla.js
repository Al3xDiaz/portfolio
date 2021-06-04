import React from 'react';
import {
  Table,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import '../css/Tabla.css'
export class Tabla extends React.Component {
  constructor(props) {
    super(props);
    let show=props.Show===undefined?[2,15,30]:props.Show;
    this.state={
      Url:props.url,
      Ddlopen:false,
      Id:props.id,
      Datos: props.Datos===undefined?[]:props.Datos,
      datosSeparados:[],
      DatosV:[],
      Show:show,
      items:show[0],
      page:6
    }
    this.cambiar=this.cambiar.bind(this);
    this.CantidadDeFilas=this.CantidadDeFilas.bind(this);
    this.Paginacion=this.Paginacion.bind(this);
  }
  componentDidMount() {
    this.GetDatos();
  }
  async GetDatos(){
    const url =this.state.Url
    if (url!==undefined) {
      const response = await fetch(url);
      const data = await response.json();

      let nuevoEstado=this.state;
      nuevoEstado.Datos=data;
      nuevoEstado.datosSeparados=Tabla.separar(data,this.state.items);
      nuevoEstado.DatosV=nuevoEstado.datosSeparados[this.state.page]
      this.setState(nuevoEstado);
    }
  }
  render(){
    console.log(this.state);
    const estructura=this.state.Datos[0]===undefined?[]:Object.keys(this.state.Datos[0]);
    const datatable=(<Table id={this.state.id}>
      <thead>
        <tr>
          {estructura.map((cell)=>
              <th>{cell}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {this.state.DatosV.map(fila=>
          <tr>
            {Object.keys(fila).map(prop=>
              <td>{fila[prop]}</td>
            )}
          </tr>
        )}
      </tbody>
    </Table>);
    const cargando=(<div>cargando...</div>);
    const empty=(<div>no hay datos para mostar</div>);
    const previw=this.state.page-this.state.items,next=parseInt(this.state.page)+parseInt(this.state.items);
    return (
      <Container>
        <Row>
          <Col md="2">
          <FormGroup>
            <Label for="filas">Mostrar</Label>
              <Input onChange={this.CantidadDeFilas} type="select" name="filas" id="filas">
                {this.state.Show.map((valor,item) =>
                  <option >{valor}</option>
                )}
              </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row>
          <Col>{this.state.Datos===undefined?cargando:this.state.Datos.length===0?empty:datatable}</Col>
        </Row>
        <Row>
          <Col md="4"><p>Mostrando {this.state.Datos.length>this.state.items?this.state.items:this.state.Datos.length} de {this.state.Datos.length}</p></Col>
          <Col md="4"></Col>
          <Col md="4" className="right">
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled={this.state.datosSeparados[previw]===undefined?true:undefined}>
                <PaginationLink data-id={previw} onClick={this.Paginacion}>{"<"}</PaginationLink>
              </PaginationItem>
          {Object.keys(this.state.datosSeparados).map((i,item)=>
              <PaginationItem active={this.state.page===parseInt(i)?true:undefined} disabled={Object.keys(this.state.datosSeparados).length>1?undefined:true}>
                <PaginationLink data-id={i} onClick={this.Paginacion}>{item+1}</PaginationLink>
              </PaginationItem>
          )}
              <PaginationItem disabled={this.state.datosSeparados[next]===undefined?true:undefined}>
                <PaginationLink data-id={next} onClick={this.Paginacion} >{">"}</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Container>
    );
  }

  //metodos comunes
  cambiar(){
    let nuevoEstado=this.state;
    nuevoEstado.Ddlopen=!nuevoEstado.Ddlopen;
    this.setState(nuevoEstado);
  }
  static separar(array,cuantasPartes){
    cuantasPartes=parseInt(cuantasPartes);
    let grupo=parseInt(cuantasPartes);
    let nuevoArray={};
    for (var i = 0; i < array.length; i++) {
      grupo=i>=grupo?grupo+cuantasPartes:grupo;
      nuevoArray[grupo]=nuevoArray[grupo]===undefined?[]:nuevoArray[grupo];
      nuevoArray[grupo].push(array[i]);
    }
    return nuevoArray;
  }
  CantidadDeFilas(event){
    let nuevoEstado=this.state;
    nuevoEstado.items=event.target.value;
    const data=this.state.Datos;
    nuevoEstado.datosSeparados=Tabla.separar(data,this.state.items);
    nuevoEstado.DatosV=nuevoEstado.datosSeparados[nuevoEstado.items]
    nuevoEstado.page=parseInt(Object.keys(nuevoEstado.datosSeparados)[0])
    this.setState(nuevoEstado);
  }
  Paginacion(event){
    let nuevoEstado=this.state;
    nuevoEstado.page=parseInt(event.target.dataset.id);
    nuevoEstado.DatosV=nuevoEstado.datosSeparados[this.state.page]
    this.setState(nuevoEstado);
    console.log(event.target.dataset.id);
  }
}
export default Tabla;
