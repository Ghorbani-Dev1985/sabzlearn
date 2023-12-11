import { GetAdminInfos } from "./Funcs/Utils.js";
const $ = document;

window.addEventListener("load", () => {
  const ShowUserFullName = $.querySelector("#ShowUserFullName");
  const WelcomeMsg = $.querySelector("#WelcomeMsg");
  const ShowCountOfNotification = $.querySelector("#ShowCountOfNotification");
  const NotificationBody = $.querySelector("#NotificationBody");
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
    if (admin.notifications.length) {
      ShowCountOfNotification.innerHTML = `${admin.notifications.length}`;
      admin.notifications.forEach((notification) => {
        NotificationBody.insertAdjacentHTML(
          "beforeend",
          `
                <div>
                   <p class="text-sm">${notification.msg}</p>
                   <div class="form-control">
            <label class="cursor-pointer label">
       <input type="checkbox" class="toggle toggle-accent !bg-slate-100" />
             </label>
          </div>
            </div>
                </div>
                `
        );
      });
    } else {
      ShowCountOfNotification.innerHTML = "0";
    }
  });
});
