import { InsertNotificationTemplate } from "./Funcs/Notification.js";
import { GetAdminInfos } from "./Funcs/Utils.js";

const $ = document;

window.addEventListener("load", () => {
  const ShowUserFullName = $.querySelector("#ShowUserFullName");
  const WelcomeMsg = $.querySelector("#WelcomeMsg");
  
  
  
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
});
