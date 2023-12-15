import {
  GetAndShowAllContacts,
  CreateNewCategory,
  DeleteCategory,
} from "./Funcs/contacts.js";

window.DeleteCategory = DeleteCategory;


window.addEventListener("load", () => {
  const AddNewCategoryBtn = document.querySelector("#AddNewCategoryBtn");
  GetAndShowAllContacts();
  AddNewCategoryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    CreateNewCategory();
  });
});
