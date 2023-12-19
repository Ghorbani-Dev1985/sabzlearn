import {GetAndShowAllTickets , CreateNewMenu , ShowTicketBody ,AnswerTicket , DeleteComment} from "./Funcs/tickets.js";


window.DeleteComment = DeleteComment;
window.ShowTicketBody = ShowTicketBody;
window.AnswerTicket = AnswerTicket;


window.addEventListener('load' , () => {
    const AddNewMenuBtn = document.querySelector('#AddNewMenuBtn');
    GetAndShowAllTickets()
    AddNewMenuBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewMenu();
    })
})