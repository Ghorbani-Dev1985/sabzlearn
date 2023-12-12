import { GetAllCourses } from "./Funcs/Courses.js"

 

window.addEventListener("load", () => {
  
  GetAllCourses().then(courses => {
    console.log(courses);
  })
})