import { Axios } from "./Axios";

function postOrder(payload) {
    return Axios.post("make-order",payload)
}

export const orderService = {
    postOrder
};