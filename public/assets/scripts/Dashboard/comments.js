import {GetAndShowAllComments , CreateNewMenu , PrepareCreateMenuFor, ShowCommentBody , DeleteMenu} from "./Funcs/comments.js";


window.DeleteMenu = DeleteMenu;
window.ShowCommentBody = ShowCommentBody;


window.addEventListener('load' , () => {
    const AddNewMenuBtn = document.querySelector('#AddNewMenuBtn');
    GetAndShowAllComments()
    PrepareCreateMenuFor()
    AddNewMenuBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewMenu();
    })
})