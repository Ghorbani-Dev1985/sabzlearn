import {
  GetAndShowAllCategories,
  CreateNewCategory,
  DeleteCategory,
} from "./Funcs/categories.js";

window.DeleteCategory = DeleteCategory;


window.addEventListener("load", () => {
  const AddNewCategoryBtn = document.querySelector("#AddNewCategoryBtn");
  GetAndShowAllCategories();
  AddNewCategoryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    CreateNewCategory();
  });
});
