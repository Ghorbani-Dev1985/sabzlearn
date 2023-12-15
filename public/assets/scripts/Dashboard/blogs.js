import {
  GetAllBlogs,
  CreateNewSession,
  ShowBlogBody,
  PrepareCreateSessionFrom,
  DeleteSession
} from "./Funcs/blogs.js";

window.DeleteSession = DeleteSession;
window.ShowBlogBody = ShowBlogBody;


window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector("#AddNewCourseBtn");
  GetAllBlogs();
  PrepareCreateSessionFrom();
  AddNewCourseBtn.addEventListener("click", (event) => {
   event.preventDefault();
   CreateNewSession();
  });
});
