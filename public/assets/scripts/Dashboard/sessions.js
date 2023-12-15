import {
  GetAllSessions,
  CreateNewCourse,
  PrepareCreateCourseFrom,
  DeleteCourse
} from "./Funcs/sessions.js";

window.DeleteCourse = DeleteCourse;

window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector("#AddNewCourseBtn");
  GetAllSessions();
  PrepareCreateCourseFrom();
  AddNewCourseBtn.addEventListener("click", (event) => {
   event.preventDefault();
    CreateNewCourse();
  });
});
