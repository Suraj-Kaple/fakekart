import { actionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    // action always returs a javascript object with key as type and the payload
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
