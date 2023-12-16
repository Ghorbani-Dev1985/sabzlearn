import {
  GetAllBlogs,
  CreateNewBlog,
  ShowBlogDescription,
  ShowBlogBody,
  PrepareCreateBlogFrom,
  DeleteSession
} from "./Funcs/blogs.js";

window.DeleteSession = DeleteSession;
window.ShowBlogBody = ShowBlogBody;
window.ShowBlogDescription = ShowBlogDescription;


window.addEventListener("load", () => {
  const AddNewBlogBtn = document.querySelector("#AddNewBlogBtn");
  GetAllBlogs();
  PrepareCreateBlogFrom();
  AddNewBlogBtn.addEventListener("click", (event) => {
   event.preventDefault();
   CreateNewBlog();
  });
});
