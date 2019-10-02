import React from "react";
import "./App.css";
import ProductListContainer from "./containers/ProductListContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";
import CartContainer from "./containers/CartContainer";
import NavContainer from "./containers/NavContainer";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />
        <div className="App container">
          <div className="row">
            <div className="col-sm-12">
              {/* <ProductListContainer /> */}
              <Switch>
                <Route exact path="/" render={() => <ProductListContainer />} />
                <Route exact path="/products/:name" render={(rtProps) => (
                  <ProductDetailContainer {...rtProps} cantFind="/"/>)} />
                <Route exact path="/cart" render={(rtProps) => (
                  <CartContainer {...rtProps} cantFind="/"/>)} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
