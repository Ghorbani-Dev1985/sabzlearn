import { Aside } from "../../../Dashboard/Components/Aside/Aside.js";
import { InsertNotificationTemplate, SeenNotification } from "./Funcs/Notification.js";
import { GetAdminInfos } from "./Funcs/Utils.js";
// Add Components
window.customElements.define('site-aside' , Aside);


window.SeenNotification = SeenNotification;



const $ = document;

window.addEventListener("load", () => {
  const ShowUserFullName = $.querySelector("#ShowUserFullName");

  GetAdminInfos().then((admin) => {
    // Protect Panel Route
    if (admin.role === "ADMIN") {
      // Show User Name
      ShowUserFullName.innerHTML = `${admin.name}`;
    } else {
      location.replace("../../../../public/login.html");
    }
    InsertNotificationTemplate(admin.notifications)
   
  });
});
