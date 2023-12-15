import {
  GetAndShowAllContacts,
  CreateNewCategory,
  DeleteContact,
  ShowContactBodyInModal,
  AnswerContact
} from "./Funcs/contacts.js";

window.DeleteContact = DeleteContact;
window.ShowContactBodyInModal = ShowContactBodyInModal;
window.AnswerContact = AnswerContact;


window.addEventListener("load", () => {
  const AnswerContactBtn = document.querySelector("#AnswerContactBtn");
  GetAndShowAllContacts();
});
