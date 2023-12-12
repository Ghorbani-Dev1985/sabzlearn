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
                     <input type="checkbox" class="toggle [--tglbg:#f3f4f6] bg-emerald-400 hover:bg-emerald-600 border-emerald-500" />
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



export { InsertNotificationTemplate };
