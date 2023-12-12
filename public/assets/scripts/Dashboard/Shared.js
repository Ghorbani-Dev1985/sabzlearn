
import { InsertNotificationTemplate } from "./Funcs/Notification.js";
import { GetAdminInfos } from "./Funcs/Utils.js";





const $ = document;

window.addEventListener("load", () => {
  

  
  GetAdminInfos().then((admin) => {
    console.log(admin);
    // Protect Panel Route
    if (admin.role !== "ADMIN") {
      location.replace("../../../../public/login.html");
    } 
    InsertNotificationTemplate(admin.notifications)
   
  });
});
