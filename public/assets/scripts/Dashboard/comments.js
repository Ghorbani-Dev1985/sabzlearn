import {GetAndShowAllComments , CreateNewMenu , PrepareCreateMenuFor, ShowCommentBody ,AnswerComment, AcceptComment , RejectComment , DeleteMenu} from "./Funcs/comments.js";


window.DeleteMenu = DeleteMenu;
window.ShowCommentBody = ShowCommentBody;
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