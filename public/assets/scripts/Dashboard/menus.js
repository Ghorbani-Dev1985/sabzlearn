import {GetAndShowAllMenus , CreateNewMenu , PrepareCreateMenuFor , DeleteMenu} from "./Funcs/menus.js";


window.DeleteMenu = DeleteMenu;

window.addEventListener('load' , () => {
    const AddNewMenuBtn = document.querySelector('#AddNewMenuBtn');
    GetAndShowAllMenus()
    PrepareCreateMenuFor()
    AddNewMenuBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        CreateNewMenu();
    })
})