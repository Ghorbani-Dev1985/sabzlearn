import { GetToken, ShowSwalAlert , BaseUrl , ChangeGregorianDateToPersian} from "../Funcs/Utils.js";
import { GetAdminInfos} from "./Funcs/Utils.js";
import { InsertNotificationTemplate, SeenNotification} from "./Funcs/Notification.js";
const $ = document;

window.SeenNotification = SeenNotification;

window.addEventListener("load", () => {
    const ShowUserFullName = document.querySelector("#ShowUserFullName");
    const WelcomeMsg = document.querySelector("#WelcomeMsg");
    GetAndShowAdminPanelInfos()
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

const GetAndShowAdminPanelInfos = async () => {
const TitleBoxOne = $.querySelector('#TitleBoxOne')
const CountBoxOne = $.querySelector('#CountBoxOne')
const TitleBoxTwo = $.querySelector('#TitleBoxTwo')
const CountBoxTwo = $.querySelector('#CountBoxTwo')
const TitleBoxThree = $.querySelector('#TitleBoxThree')
const CountBoxThree = $.querySelector('#CountBoxThree')
const LastUserTable = $.querySelector('#LastUserTable tbody')
let year, month, day;
  const res = await fetch(`${BaseUrl()}infos/p-admin`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  });
  const AdminPanelInfos = await res.json();
  TitleBoxOne.innerHTML = AdminPanelInfos.infos[0].title;
CountBoxOne.innerHTML = AdminPanelInfos.infos[0].count;
TitleBoxTwo.innerHTML = AdminPanelInfos.infos[1].title;
CountBoxTwo.innerHTML = AdminPanelInfos.infos[1].count;
TitleBoxThree.innerHTML = AdminPanelInfos.infos[2].title;
CountBoxThree.innerHTML = AdminPanelInfos.infos[2].count;

{/* <th>نام کاربر</th>
<th>تاریخ ثبت نام</th>
<th>نام کاربری</th>
<th> تلفن تماس</th>
<th>  ایمیل</th>
<th>نقش کاربری </th> */}
AdminPanelInfos.lastUsers.forEach((lastUser , index) => {
  year = lastUser.createdAt.slice(0, 4);
  month = lastUser.createdAt.slice(5, 7);
  day = lastUser.createdAt.slice(8, 10);
  LastUserTable.insertAdjacentHTML('beforeend' , `
  <tr class='even:bg-gray-50 odd:bg-white'>
    <td>${index + 1}</td>
    <td>${lastUser.name}</td>
    <th>${ChangeGregorianDateToPersian(+year , +month , +day)}</th>
    <th>${lastUser.username}</th>
    <th>${lastUser.phone}</th>
    <th>${lastUser.email}</th>
    <th>
    ${
      lastUser.role === "ADMIN" ? 'مدیرسایت' : 'کاربر'
    }
    </th>

    
  </tr> 
  `)

})
  console.log(AdminPanelInfos);
}