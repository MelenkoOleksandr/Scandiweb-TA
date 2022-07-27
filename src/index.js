import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux';
import store from './app/store';
import AppContainer from './containers/AppContainer';
import client from './app/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  </Provider>
);

