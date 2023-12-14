import {GetAndShowAllUsers, DeleteUser , BanUser , CreateNewUser} from "./Funcs/users.js";


window.DeleteUser = DeleteUser;
window.BanUser = BanUser;


window.addEventListener('load' , () => {
    const AddNewUserBtn = document.querySelector('#AddNewUserBtn');
    GetAndShowAllUsers()
    AddNewUserBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewUser();
    })
})