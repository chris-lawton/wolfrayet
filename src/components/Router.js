import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from 'shopify-buy';
import App from './App';
import AllProducts from './AllProducts';
import NotFound from './NotFound';

const client = Client.buildClient({
  storefrontAccessToken: '1c6ad7f4426b3db3082ea4b9b3d5d0df',
  domain: 'wolf-rayet-london.myshopify.com'
});

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <App client={client}/> } />
            <Route path='/products' render={() => <AllProducts client={client}/> } />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
