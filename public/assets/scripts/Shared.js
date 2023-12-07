import { GetMe } from "./Funcs/Auth.js";

window.addEventListener('load' , () => {
    GetMe().then(data => {
        console.log(data.name);
    })
})