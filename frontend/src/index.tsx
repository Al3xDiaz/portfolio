import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import routes from './routes'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path={routes.path} element={routes.componet} >
      {routes.childrens?.map((item,index)=>(
        <Route path={item.path} element={item.componet} >
          {item.childrens?.map((childrenItem,i)=>(
            <Route path={childrenItem.path} element={childrenItem.componet}/>
          ))}
        </Route>
      ))}
      </Route>
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
