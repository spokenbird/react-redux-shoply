import { connect } from "react-redux";
import Nav from "../components/Nav";

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Nav)