import { GetAllCourses , CreateNewCourse , PrepareCreateCourseFrom} from "./Funcs/Courses.js"

 

window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector('#AddNewCourseBtn');
  GetAllCourses()
  PrepareCreateCourseFrom()
  AddNewCourseBtn.addEventListener('click' , (event) => {
    event.preventDefault();
    CreateNewCourse()
  })
})