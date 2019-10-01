import React from 'react';
import './App.css';
import ProductListContainer from "./containers/ProductListContainer";
import NavContainer from './containers/NavContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />
        <div className="App container">
          <div className="row">
            <div className="col-sm-12">
              <ProductListContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
