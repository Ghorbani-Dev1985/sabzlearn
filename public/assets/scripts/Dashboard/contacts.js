import {
  GetAndShowAllContacts,
  CreateNewCategory,
  DeleteContact,
  AnswerContact,
  OpenModal
} from "./Funcs/contacts.js";

window.DeleteContact = DeleteContact;
window.OpenModal = OpenModal;


window.addEventListener("load", () => {
  const AnswerContactBtn = document.querySelector("#AnswerContactBtn");
  GetAndShowAllContacts();
  AnswerContactBtn.addEventListener('click' , e => {
    e.preventDefault();
    AnswerContact();
  })
});
