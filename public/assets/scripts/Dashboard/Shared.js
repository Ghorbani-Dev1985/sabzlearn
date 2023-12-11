import { GetAdminInfos } from "./Funcs/Utils.js";
const $ = document;


window.addEventListener('load' , () => {
    const ShowUserFullName = $.querySelector('#ShowUserFullName');
    const WelcomeMsg = $.querySelector('#WelcomeMsg');
    GetAdminInfos().then(admin => {
        console.log(admin);
      ShowUserFullName.innerHTML = `${admin.name}`;
      WelcomeMsg.innerHTML = `<span class="text-emerald-500"> ${admin.name} </span>عزیز ،  خوش آمدید` ;
    })

})