import {GetAndShowAllUsers , CreateNewMenu , PrepareCreateMenuFor , DeleteMenu} from "./Funcs/users.js";


window.DeleteMenu = DeleteMenu;

window.addEventListener('load' , () => {
    const AddNewMenuBtn = document.querySelector('#AddNewMenuBtn');
    GetAndShowAllUsers()
    PrepareCreateMenuFor()
    AddNewMenuBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewMenu();
    })
})