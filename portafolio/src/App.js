import React, { Component } from 'react';
import { Route } from 'react-router';
import Profile from './home'
import { Usuarios } from './components/Usuarios';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Comentarios } from './components/Comentarios';
import { Comentar } from './components/Comentar';
import { TablasEjemplo } from './components/TablasEjemplo';
import { EquisCero } from './components/EquisCero';
import { Parejas } from './components/Parejas';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Route exact path='/' component={Profile} />
        <Route path='/contador' component={Counter} />
        <Route path='/usuarios' component={Usuarios} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/comentarios' component={Comentarios} />
        <Route path='/comentar' component={Comentar} />
        <Route path='/TablasEjemplo' component={TablasEjemplo} />
        <Route path='/EquisCero' component={EquisCero} />
        <Route path='/Parejas' component={Parejas} />
      </div>
    );
  }
}
