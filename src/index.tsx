import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppState} from "./state";
import {Cart} from "./state/cart/types";

const appState = {
  cart: new Cart()
}

export const AppStateContext = createContext<AppState | null>(null);

ReactDOM.render(
  <React.StrictMode>
    <AppStateContext.Provider value={appState}>
      <App/>
    </AppStateContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
