import {
  GetAndShowAllContacts,
  CreateNewCategory,
  DeleteContact,
  AnswerContact
} from "./Funcs/contacts.js";

window.DeleteContact = DeleteContact;


window.addEventListener("load", () => {
  const AnswerContactBtn = document.querySelector("#AnswerContactBtn");
  GetAndShowAllContacts();
  AnswerContactBtn.addEventListener('click' , e => {
    e.preventDefault();
    AnswerContact();
  })
});
