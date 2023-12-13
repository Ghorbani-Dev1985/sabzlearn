import { GetAllCourses , CreateNewCourse , PrepareCreateCourseFrom} from "./Courses.js"

 

window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector('#AddNewCourseBtn');
  GetAllCourses()
  PrepareCreateCourseFrom()
  AddNewCourseBtn.addEventListener('click' , (event) => {
    event.preventDefault();
    CreateNewCourse()
  })
})