import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MovieProvider} from './YouTube/context/context'
import {SearchContextProvider} from './YouTube/context/contex2'
import { CategoryContextProvider } from './YouTube/context/category';
import { ModaleProvider } from './YouTube/context/modal';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
          <SearchContextProvider>
            <CategoryContextProvider>
                          <ModaleProvider>
                                    <BrowserRouter>
                                                <App />
                                    </BrowserRouter>
                          </ModaleProvider>
            </CategoryContextProvider>
          </SearchContextProvider>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


