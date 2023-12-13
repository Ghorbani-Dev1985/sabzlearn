import { GetAndShowAllCourses , GetAndShowPopularCourses , GetAndShowPreSellCourses , GetAndShowArticles , GetFreeCourses} from './Funcs/Sheared.js'

window.addEventListener('load', () => {
    GetAndShowAllCourses();
    GetAndShowPopularCourses();
    GetAndShowPreSellCourses();
    GetAndShowArticles();
    GetFreeCourses();
})

