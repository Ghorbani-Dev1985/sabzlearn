import { GetAndShowAllCourses , GetAndShowPopularCourses , GetAndShowPreSellCourses } from './Funcs/Sheared.js'

window.addEventListener('load', () => {
    GetAndShowAllCourses();
    GetAndShowPopularCourses();
    GetAndShowPreSellCourses();
})