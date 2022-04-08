import { Axios } from "./Axios";

function loginProduct(payload) {
    return Axios.post("login",payload);
}

export const loginService = {
    loginProduct
};