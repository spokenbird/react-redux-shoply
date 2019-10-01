import React from "react";
import Product from "./Product";

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <Product addToCart={this.props.addToCart} 
                   removeFromCart={this.props.removeFromCart} 
                   product={product} 
                   key={product.name} 
          />
          ))}
      </div>
    )
  }
}

export default ProductList;