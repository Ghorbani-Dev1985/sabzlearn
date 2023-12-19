import {
  ShowAllAnswerTickets,
  PrepareSendTicketForm,
  SendNewTicket,
} from "./Funcs/profile_AnswerTicket.js";


window.addEventListener("load", () => {
  const SendNewTicketBtn = document.querySelector("#SendNewTicketBtn");
  ShowAllAnswerTickets();
  PrepareSendTicketForm();
  SendNewTicketBtn.addEventListener("click", (e) => {
    e.preventDefault();
    SendNewTicket();
  });
});
