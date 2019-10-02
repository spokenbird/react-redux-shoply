import { addToCart, removeFromCart } from "./actions";

describe("Add and remove to cart", function() {
  test("should return object with type add and payload", function() {
    let product = { name: "tv", description: "black", price: "$1.00"}
    expect(addToCart(product)).toEqual({
      type: "ADD_TO_CART",
      payload: { name: "tv", description: "black", price: "$1.00"}
    })
  })

  test("should return object with type remove and payload", function() {
    let product = { name: "tv", description: "black", price: "$1.00"}
    expect(removeFromCart(product)).toEqual({
      type: "REMOVE_FROM_CART",
      payload: { name: "tv", description: "black", price: "$1.00"}
    })
  })
})