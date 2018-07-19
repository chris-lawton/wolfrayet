import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './app.css';

const client = Client.buildClient({
  storefrontAccessToken: '1c6ad7f4426b3db3082ea4b9b3d5d0df',
  domain: 'wolf-rayet-london.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
