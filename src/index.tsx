import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {setupStore} from "./store";
import {Provider} from "react-redux";

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
