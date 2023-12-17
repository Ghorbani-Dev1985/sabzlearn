import {GetAndShowAllUsers, DeleteUser , BanUser , CreateNewUser , ChangeUserRole} from "./Funcs/users.js";


window.DeleteUser = DeleteUser;
window.BanUser = BanUser;
window.ChangeUserRole = ChangeUserRole;


window.addEventListener('load' , () => {
    const AddNewUserBtn = document.querySelector('#AddNewUserBtn');
    GetAndShowAllUsers()
    AddNewUserBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewUser();
    })
})