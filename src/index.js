import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
/* import { DataProvider } from './pages/Registration/DataContext'; */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <DataProvider> */}
        <App />
      {/* </DataProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


