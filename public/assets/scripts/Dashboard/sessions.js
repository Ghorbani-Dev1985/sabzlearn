import {
  GetAllSessions,
  CreateNewSession,
  PrepareCreateSessionFrom,
  DeleteCourse
} from "./Funcs/sessions.js";

window.DeleteCourse = DeleteCourse;

window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector("#AddNewCourseBtn");
  GetAllSessions();
  PrepareCreateSessionFrom();
  AddNewCourseBtn.addEventListener("click", (event) => {
   event.preventDefault();
   CreateNewSession();
  });
});
