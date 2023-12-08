import { GetAndShowAllCourses , GetAndShowPopularCourses , GetAndShowPreSellCourses , GetAndShowArticles} from './Funcs/Sheared.js'

window.addEventListener('load', () => {
    GetAndShowAllCourses();
    GetAndShowPopularCourses();
    GetAndShowPreSellCourses();
    GetAndShowArticles();
})