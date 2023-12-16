import {
  GetAllBlogs,
  CreateNewBlog,
  DraftNewBlog,
  ShowBlogDescription,
  ShowBlogBody,
  PrepareCreateBlogFrom,
  DeleteBlog
} from "./Funcs/blogs.js";

window.DeleteBlog = DeleteBlog;
window.ShowBlogBody = ShowBlogBody;
window.ShowBlogDescription = ShowBlogDescription;


window.addEventListener("load", () => {
  const AddNewBlogBtn = document.querySelector("#AddNewBlogBtn");
  const DraftBlogBtn = document.querySelector("#DraftBlogBtn");
  GetAllBlogs();
  PrepareCreateBlogFrom();
  AddNewBlogBtn.addEventListener("click", (event) => {
   event.preventDefault();
   CreateNewBlog();
  });
  DraftBlogBtn.addEventListener('click' , (event) => {
    event.preventDefault();
    DraftNewBlog();
  })
});
