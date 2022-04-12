import { Axios } from "./Axios";

function getUser() {
    return Axios.get("user");
}

function updateUser(payload) {
    return Axios.put("update-profile",payload)
}

function getListOrder(id) {
    return Axios.get("my-orders?page="+id);
}

function postAvatar(formData) {
    console.log(formData)
    Axios.setHeaders({ 'Content-Type': 'multipart/form-data' })
    return Axios.post("update-avatar",formData
    ).then((res)=> {
        console.log(res);
    }).catch((err)=>{
        alert(err);
    })
}

export const authService = {
    getUser,
    updateUser,
    getListOrder,
    postAvatar,
};