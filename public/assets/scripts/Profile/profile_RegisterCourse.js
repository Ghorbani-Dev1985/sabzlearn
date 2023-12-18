import {  ShowUserInfos, GetAndShowAllUserCourses } from "./Funcs/profile_RegisterCourse.js";



window.addEventListener("load", () => {
  const EditUserDetailsBtn = document.querySelector("#EditUserDetailsBtn");
  GetAndShowAllUserCourses()
  EditUserDetailsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    EditUserDetails();
  });
});
