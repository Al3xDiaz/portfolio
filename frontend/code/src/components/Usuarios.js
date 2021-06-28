import React, { Component } from 'react';
import Layout from './Layout'
export class Usuarios extends Component {
  static displayName = Usuarios.name;

  constructor(props) {
    super(props);
    this.state = { loading: true,Usuarios:[] };
  }
  componentDidMount() {
    this.GetUsuarios();
  }

  static renderForecastsTable(usuarios) {
    return (      
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>telefono</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario =>
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.phone}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Usuarios.renderForecastsTable(this.state.Usuarios);
    return (
      <Layout>
        <h1 id="tabelLabel" >Listado de usuarios</h1>
        <p>aqui se muestra una pequeña lista de usuarios</p>
        {contents}
      </Layout>
    );
  }

  async GetUsuarios() {
    const response = await fetch('/Usuarios/GetUsuarios');
    const data = await response.json();
    this.setState({ Usuarios: data, loading: false });
  }
}
