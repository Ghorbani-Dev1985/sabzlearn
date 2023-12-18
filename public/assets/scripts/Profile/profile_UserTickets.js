import {  ShowAllTickets } from "./Funcs/profile_UserTickets.js";



window.addEventListener("load", () => {
  const EditUserDetailsBtn = document.querySelector("#EditUserDetailsBtn");
  ShowAllTickets()
  EditUserDetailsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    EditUserDetails();
  });
});
