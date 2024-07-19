import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { worker } from './test/mocks/browser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const startWorker = async () => {
  if (process.env.NODE_ENV === 'development') {
    await worker.start();
  }
};

startWorker().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});

reportWebVitals();
