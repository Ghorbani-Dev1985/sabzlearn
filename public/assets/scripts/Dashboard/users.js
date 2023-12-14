import {GetAndShowAllUsers , CreateNewMenu , PrepareCreateMenuFor , DeleteUser , BanUser} from "./Funcs/users.js";


window.DeleteUser = DeleteUser;
window.BanUser = BanUser;


window.addEventListener('load' , () => {
    const AddNewMenuBtn = document.querySelector('#AddNewMenuBtn');
    GetAndShowAllUsers()
    PrepareCreateMenuFor()
    AddNewMenuBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewMenu();
    })
})