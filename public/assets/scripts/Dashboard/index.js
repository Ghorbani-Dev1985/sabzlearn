import { GetAdminInfos} from "./Funcs/Utils.js";
import { InsertNotificationTemplate, SeenNotification } from "./Funcs/Notification.js";


window.SeenNotification = SeenNotification;

window.addEventListener("load", () => {
    const ShowUserFullName = document.querySelector("#ShowUserFullName");
    const WelcomeMsg = document.querySelector("#WelcomeMsg");
    const LogoutBtn = document.querySelector('#LogoutBtn');
    GetAdminInfos().then((admin) => {
        console.log(admin);
        // Protect Panel Route
        if (admin.role === "ADMIN") {
          // Show User Name
          ShowUserFullName.innerHTML = `${admin.name}`;
          WelcomeMsg.innerHTML = `<span class="text-emerald-500"> ${admin.name} </span>عزیز ،  خوش آمدید`;
        } else {
          location.replace("../../../../public/login.html");
        }
        InsertNotificationTemplate(admin.notifications)
       
      });
})