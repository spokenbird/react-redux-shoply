import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.props.addToCart(this.props.product);
  }
  handleRemove() {
    this.props.removeFromCart(this.props.product);
  }
  
  render() {
    console.log("details props", this.props)
    let name = this.props.match.params.name;

    let item = this.props.products.find(item => item.name === name);
    
    if (!item) return <Redirect to={this.props.cantFind} />;

    return (
      <div className="card">
      <div className="card-body row">
        <div className="col-sm-12">
          <h4 className="card-title float-left">
            {name}
          </h4>
        </div>
        <div className="col-sm-6"><img className="img-fluid" src={item.image_url} alt={item.name} /></div>
        <div className="col-sm-6">
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
        </div>
        <div className="button-group float-right">
          <button className="btn btn-primary" onClick={this.handleAdd}>Add to Cart</button>
          <button className="btn btn-outline-primary" onClick={this.handleRemove}>Remove from Cart</button>
        </div>
      </div>
    </div>
    );
  }
}

export default ProductDetail;