import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import ProductDetail from "../components/ProductDetail";

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart })(ProductDetail)