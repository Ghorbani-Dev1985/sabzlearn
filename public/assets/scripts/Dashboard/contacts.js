import {
  GetAndShowAllContacts,
  CreateNewCategory,
  DeleteContact,
} from "./Funcs/contacts.js";

window.DeleteContact = DeleteContact;


window.addEventListener("load", () => {
  const AddNewCategoryBtn = document.querySelector("#AddNewCategoryBtn");
  GetAndShowAllContacts();
  AddNewCategoryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    CreateNewCategory();
  });
});
