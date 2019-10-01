import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() { this.props.addToCart(this.props.product) }
  handleRemove() { this.props.removeFromCart(this.props.product) }

  render() {
    return (
      <div className="card">
        <div className="card-body row">
          <div className="col-sm-12">
            <h4 className="card-title float-left">
              {this.props.product.name}
            </h4>
          </div>
          <div className="col-sm-6"><img className="img-fluid" src={this.props.product.image_url} alt={this.props.product.name} /></div>
          <div className="col-sm-6">
            <p className="card-text">{this.props.product.description}</p>
            <p className="card-text">{this.props.product.price}</p>
          </div>
          <div className="button-group float-right">
            <button className="btn btn-primary" onClick={this.handleAdd}>Add to Cart</button>
            <button className="btn btn-outline-primary" onClick={this.handleRemove}>Remove from Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;