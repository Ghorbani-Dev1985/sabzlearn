import {  ShowAllTickets , PrepareSendTicketForm} from "./Funcs/profile_UserTickets.js";



window.addEventListener("load", () => {
  const EditUserDetailsBtn = document.querySelector("#EditUserDetailsBtn");
  ShowAllTickets();
  PrepareSendTicketForm();
  EditUserDetailsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    EditUserDetails();
  });
});
