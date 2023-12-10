import { GlobalSearchInApp } from "./Funcs/Sheared.js";

window.addEventListener('load' , () => {
    GlobalSearchInApp().then(data => {
        console.log(data);
    })

})
