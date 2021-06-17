import { ActionTypes } from "../constants/actiontypes";
export const setProducts = (products) => {
    return {
        type: setProducts
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT
    };
};