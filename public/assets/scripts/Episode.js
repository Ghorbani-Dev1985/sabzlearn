import {GetSessionDetails} from './Funcs/Sheared.js';
window.addEventListener('load' , () => {
    GetSessionDetails().then(data => {
        console.log(data);
    })
})