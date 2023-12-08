import {GetAndShowCategoryCourses} from './Funcs/Sheared.js';

window.addEventListener('load' , () => {
    GetAndShowCategoryCourses().then(data => {
        console.log(data);
    })
})