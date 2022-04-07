import { Axios } from "./Axios";

function getHome() {
    return Axios.get("products/4");
}

export const homeService = {
    getHome
};