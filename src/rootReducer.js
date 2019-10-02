// import uuid from 'uuid/v4'
import Products from './data.json'
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_STATE = { products: Object.values(Products.products), cart: [] }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state, 
        cart: [...state.cart, { ...action.payload }]
      };

    case REMOVE_FROM_CART:
      let index = state.cart.findIndex(product => product=== action.payload)
      let newCart = [...state.cart]
      newCart.splice(index, 1)
      console.log("INDEX",index)
      return {
        ...state, 
        cart: newCart
      }

    default:
      return state;
  }
}

export default rootReducer;