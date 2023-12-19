import {  ShowAllTickets , PrepareSendTicketForm , SendNewTicket} from "./Funcs/profile_UserTickets.js";



window.addEventListener("load", () => {
  const SendNewTicketBtn = document.querySelector("#SendNewTicketBtn");
  ShowAllTickets();
  PrepareSendTicketForm();
  SendNewTicketBtn.addEventListener("click", (e) => {
    e.preventDefault();
    SendNewTicket();
  });
});
