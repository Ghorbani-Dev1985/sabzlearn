import {
  GetAllBlogs,
  CreateNewSession,
  ShowBlogBody,
  PrepareCreateBlogFrom,
  DeleteSession
} from "./Funcs/blogs.js";

window.DeleteSession = DeleteSession;
window.ShowBlogBody = ShowBlogBody;


window.addEventListener("load", () => {
  const AddNewCourseBtn = document.querySelector("#AddNewCourseBtn");
  GetAllBlogs();
  ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .catch( error => {
      console.error( error );
  } )
  PrepareCreateBlogFrom();
  AddNewCourseBtn.addEventListener("click", (event) => {
   event.preventDefault();
   //CreateNewSession();
  });
});
