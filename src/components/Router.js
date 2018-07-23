import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from 'shopify-buy';
import Header from './Header';
import App from './App';
import AllProducts from './AllProducts';
import About from './About';
import NotFound from './NotFound';

const client = Client.buildClient({
  storefrontAccessToken: '1c6ad7f4426b3db3082ea4b9b3d5d0df',
  domain: 'wolf-rayet-london.myshopify.com'
});

const Main = () => (
    <Router>
        <div>
            <Header client={client} />
            <Switch>
                <Route exact path="/" render={() => <App client={client}/> } />
                <Route path='/products' render={() => <AllProducts client={client}/> } />
                <Route path='/about' component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default Main;
