import { ProductInterface } from "../../../Interfaces";
import {
  ADD_PRODUCT,
  SET_PRODUCTS,
  SET_GROUPS,
  ADD_OPTIONS,
  SET_OPTIONS,
  FILTER,
  UPDATE,
  SEARCH,
  SET_SHOW_FORM,
  SET_SELECTED_OPTION,
} from "./productType";

export function addProduct(product: ProductInterface) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function setProducts(storedProducts: ProductInterface[]) {
  return {
    type: SET_PRODUCTS,
    payload: storedProducts,
  };
}

export function setGroups(storedGroup: string[]) {
  return {
    type: SET_GROUPS,
    payload: storedGroup,
  };
}

export function addOptions(product: ProductInterface) {
  return {
    type: ADD_OPTIONS,
    payload: product,
  };
}

export function setOptions(storedOptions: {value: string, label: string}[]) {
  return {
    type: SET_OPTIONS,
    payload: storedOptions,
  };
}

export function setSelectedOption(selectedOption: {value: string; label: string;}) {
  return {
    type: SET_SELECTED_OPTION,
    payload: selectedOption,
  };
}

export function filterProduct(selectedOption: {value: string; label: string;}) {
  return {
    type: FILTER,
    payload: selectedOption,
  };
}

export function updateProduct(updatedProduct: ProductInterface) {
  return {
    type: UPDATE,
    payload: updatedProduct,
  };
}

export function searchProducts(value: string) {
  return {
    type: SEARCH,
    payload: value,
  };
}

export function setShowForm() {
  return {
    type: SET_SHOW_FORM,
  };
}
