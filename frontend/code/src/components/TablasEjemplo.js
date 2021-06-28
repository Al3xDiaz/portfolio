import React from 'react';
import Tabla from '../basico/Tabla'
import Layout from './Layout'

export class TablasEjemplo extends React.Component {
  render(){
    return (
      <Layout>
        <Tabla url="weatherforecast" />
      </Layout>
    );
  }
}
export default TablasEjemplo;
