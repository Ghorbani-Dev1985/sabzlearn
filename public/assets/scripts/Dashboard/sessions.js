import {
  GetAllSessions,
  CreateNewSession,
  PrepareCreateSessionFrom,
  DeleteSession
} from "./Funcs/sessions.js";

window.DeleteSession = DeleteSession;

window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector("#AddNewCourseBtn");
  GetAllSessions();
  PrepareCreateSessionFrom();
  AddNewCourseBtn.addEventListener("click", (event) => {
   event.preventDefault();
   CreateNewSession();
  });
});
