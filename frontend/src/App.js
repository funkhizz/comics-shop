import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop-page/shop.page';
import Header from './components/header/header.component';
import Footer from './layout/footer/footer.layout';
import StorePage from './pages/store-page/store.page';
import ContactPage from './pages/contact-page/contact.page'
import CheckoutPage from './pages/checkout/checkout.page'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={ShopPage} />
        <Route exact path='/store' component={StorePage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
