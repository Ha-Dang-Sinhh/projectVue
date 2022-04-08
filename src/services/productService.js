import { Axios } from "./Axios";

function getProduct(id) {
    return Axios.get("products/"+id);
}

export const productService = {
    getProduct
};