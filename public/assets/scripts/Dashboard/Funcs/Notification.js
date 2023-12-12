import { GetToken } from "../../Funcs/Utils.js";

const $ = document;
const InsertNotificationTemplate = (notifications) => {
  const NotificationBody = $.querySelector(".NotificationBody");
  const ShowCountOfNotification = $.querySelector(".ShowCountOfNotification");
  const NotificationIconBody = $.querySelector(".NotificationIconBody");
  if (notifications.length) {
    ShowCountOfNotification.innerHTML = `${notifications.length}`;
    notifications.forEach((notification) => {
      NotificationBody.insertAdjacentHTML(
        "beforeend",
        `
                  <div>
                     <p class="text-sm">${notification.msg}</p>
                     <div class="form-control">
                     <input type="checkbox" onClick="SeenNotification('${notification._id}')" class="toggle [--tglbg:#f3f4f6] bg-emerald-400 hover:bg-emerald-600 border-emerald-500" />
            </div>
              </div>
                  </div>
                  `
      );
    });
  } else {
    ShowCountOfNotification.innerHTML = "0";
    NotificationIconBody.classList.add("bg-gray-100", "hover:bg-gray-400");
    NotificationBody.insertAdjacentHTML(
      "beforeend",
      `
                <div>
                   <p class="text-sm text-rose-400 p-1 rounded-lg"> هیچ پیامی برای نمایش وجود ندارد</p>
                   
                </div>
                `
    );
  }
};

const SeenNotification = async (NotificationID) => {
    console.log(NotificationID);
   const res = await fetch(`http://localhost:4000/v1/notifications/see/${NotificationID}` , {
    method: "PUT",
    headers:{     
        Authorization : `Bearer ${GetToken()}`,
    },
   });
   const result = await res.json();
   location.reload();
   
}

export { InsertNotificationTemplate , SeenNotification};
