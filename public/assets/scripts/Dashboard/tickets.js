import {GetAndShowAllComments , CreateNewMenu , PrepareCreateMenuFor, ShowTicketBody ,AnswerComment, AcceptComment , RejectComment , DeleteComment} from "./Funcs/tickets.js";


window.DeleteComment = DeleteComment;
window.ShowTicketBody = ShowTicketBody;
window.AnswerComment = AnswerComment;
window.AcceptComment = AcceptComment;
window.RejectComment = RejectComment;


window.addEventListener('load' , () => {
    const AddNewMenuBtn = document.querySelector('#AddNewMenuBtn');
    GetAndShowAllComments()
    PrepareCreateMenuFor()
    AddNewMenuBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewMenu();
    })
})