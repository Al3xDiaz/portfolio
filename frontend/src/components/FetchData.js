import React, { Component } from 'react';
import Layout from './Layout';
import { Spinner } from 'reactstrap';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <div>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Fecha y hora</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Resumen</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map(forecast =>
              <tr key={forecast.date}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <div style={{marginLeft:"50%",marginRight:"50%"}}><Spinner color="primary" /></div>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <Layout>
        <h1 id="tabelLabel" >Pronostico del tiempo</h1>
        <p>Este componete trae datos del servidor.</p>
        {contents}
      </Layout>
    );
  }

  async populateWeatherData() {
    const response = await fetch('api/weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
