import {GetAndShowAllUsers , CreateNewMenu , PrepareCreateMenuFor , DeleteUser} from "./Funcs/users.js";


window.DeleteUser = DeleteUser;

window.addEventListener('load' , () => {
    const AddNewMenuBtn = document.querySelector('#AddNewMenuBtn');
    GetAndShowAllUsers()
    PrepareCreateMenuFor()
    AddNewMenuBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewMenu();
    })
})