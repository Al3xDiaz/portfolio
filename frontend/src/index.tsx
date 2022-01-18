import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/navbar/navbar';
import routes from './routes'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <NavBar menuItems={routes} title='Alex Diaz' />
    <Switch>
      {/* <Route exact path={routes.path}>
        {routes.componet}
      </Route> */}
      {routes?.map((item,index)=>(
        <Route key={index} exact path={item.path}>
          {item.componet}
          {/* {item.childrens?.map((childrenItem,i)=>(
            <Route path={childrenItem.path} element={childrenItem.componet}/>
          ))} */}
        </Route>
      ))}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
