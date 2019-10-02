import React from "react";
import Product from "./Product"

class Cart extends React.Component {
  render() {
    console.log("this is our cart",this.props.cart)
    return (
      <div>
        <div>
        {this.props.cart.map((product, idx) => (
          <Product showAddCart={false}
                   removeFromCart={this.props.removeFromCart} 
                   product={product} 
                   key={idx} 
          />
          ))}
      </div>
      </div>
    )
  }
}

export default Cart;