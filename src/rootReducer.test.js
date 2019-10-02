import "./rootReducer";
import rootReducer from "./rootReducer";

describe("root reducer...", function() {
  test("add case", function() {
    let state = { cart: [{ name: "tv"}]};
    let action = { type: "ADD_TO_CART", payload: {name: "phone"}};
    expect(rootReducer(state, action)).toEqual({ cart: [{ name: "tv"}, {name: "phone"}]})
  })
  
  test("add case", function() {
    let state = { cart: [{ name: "tv"}]};
    let action = { type: "REMOVE_FROM_CART", payload: {name: "tv"}};
    expect(rootReducer(state, action)).toEqual({ cart: []})
  })

  test("add case", function() {
    let state = { cart: [{ name: "tv"}]};
    let action = { type: "adfgasfkaj", payload: {name: "phone"}};
    expect(rootReducer(state, action)).toEqual({ cart: [{ name: "tv"}]})
  })
})