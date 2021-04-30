import * as Actions from "../Actions";

const initialState = {
  totalPrice: 0,
  cartItems: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  if (type === Actions.ADD_TO_CART) {
    let total = 0;

    for (let i = 0; i < state.cartItems.length; i++) {
      total = total + state.cartItems[i].price;
    }

    total = total + payload.price;

    return {
      ...state,
      cartItems: [...state.cartItems, payload],
      totalPrice: total,
    };
  }

  if (type === Actions.DELETE_CART_ITEM) {
    let total = 0;

    for (let i = 0; i < state.cartItems.length; i++) {
      total = total + state.cartItems[i].price;
    }

    total = total - payload.price;

    return {
      ...state,
      cartItems: state.cartItems.filter((val) => val.id !== payload.id),
      totalPrice: total,
    };
  }

  if (type === Actions.UPDATE_CART_ITEM) {
    let temp = state.cartItems;
    let total = 0;
    for (let i = 0; i < temp.length; i++) {
      if (state.cartItems[i].id === payload.id) {
        temp[i]["price"] = payload.price;
        temp[i]["quantity"] = payload.quantity;
      }
      total = total + temp[i].price;
    }

    return {
      ...state,
      cartItems: temp,
      totalPrice: total,
    };
  }

  if (type === Actions.SOLD) {
    return {
      ...state,
      totalPrice: 0,
      cartItems: [],
    };
  }

  return state;
}
