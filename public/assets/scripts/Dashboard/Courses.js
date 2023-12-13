import {
  GetAllCourses,
  CreateNewCourse,
  PrepareCreateCourseFrom,
  DeleteCourse
} from "./Funcs/Courses.js";

window.DeleteCourse = DeleteCourse;

window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector("#AddNewCourseBtn");
  GetAllCourses();
  PrepareCreateCourseFrom();
  AddNewCourseBtn.addEventListener("click", (event) => {
   event.preventDefault();
    CreateNewCourse();
  });
});
