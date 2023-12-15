import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let CourseID = -1;
let SessionStatus = 0;
let SessionCover = null;

const GetAllSessions = async () => {
  const CountOfAllSessions = $.querySelector("#CountOfAllSessions");
  const AllSessionsTable = $.querySelector("#AllSessionsTable tbody");
  AllSessionsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}courses/sessions`);
  const sessions = await res.json();
  CountOfAllSessions.innerHTML = sessions.length;
  let year, month, day;
  sessions.forEach((session, index) => {
    console.log(session.video);
    year = session.createdAt.slice(0, 4);
    month = session.createdAt.slice(5, 7);
    day = session.createdAt.slice(8, 10);
    AllSessionsTable.insertAdjacentHTML(
      "beforeend",
      `
       <tr class="even:bg-gray-50 odd:bg-white">
       <th>
      ${index + 1}
       </th>
       <td class="font-DanaMd leading-5">
        ${session.title}
       </td>
       <td>
        ${ChangeGregorianDateToPersian(+year, +month, +day)}
       </td>
       <td>
        ${session.time}
       </td>
       <td>         ${session.course.name}        </td>
       <td class="p-4">
       <a href="http://localhost:4000/courses/covers/${session.video}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0ea5e9" class="w-6 h-6">
       <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
     </svg>
     </a>
       </video>
       
       </td>
       <td>
       ${
         session.free === 1
           ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" class="w-5 h-5">
       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
     </svg>
     `
           : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f43f5e" class="w-6 h-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
   </svg>
   `
       }
       </td>
        <td>
        <div onClick="DeleteSession('${
          session._id
        }')" class="text-rose-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
        </div>
        </td>
     </tr>
       `
    );
  });

  return sessions;
};

const PrepareCreateSessionFrom = async () => {
  const CourseNameList = $.querySelector("#CourseNameList");
  const FreeSessionRadio = $.querySelector("#FreeSessionRadio");
  const NotFreeSessionRadio = $.querySelector("#NotFreeSessionRadio");
  const SessionCoverUploader = $.querySelector("#SessionCoverUploader");
  const ShowFileNameUpload = $.querySelector("#ShowFileNameUpload");
  const res = await fetch(`${BaseUrl()}courses`);
  const courses = await res.json();
  console.log(courses);
  courses.forEach((course) => {
    CourseNameList.insertAdjacentHTML(
      "beforeend",
      `
       <option value=${course._id}>${course.name}</option>
      `
    );
  });
  CourseNameList.addEventListener(
    "change",
    (event) => (CourseID = event.target.value)
  );
  FreeSessionRadio.addEventListener(
    "change",
    (event) => (SessionStatus = event.target.value)
  );
  NotFreeSessionRadio.addEventListener(
    "change",
    (event) => (SessionStatus = event.target.value)
  );
  SessionCoverUploader.addEventListener("change", (event) => {
    ShowFileNameUpload.innerHTML = event.target.files[0].name;
    SessionCover = event.target.files[0];
  });
};

const CreateNewSession = async () => {
  const SessionNameInput = $.querySelector("#SessionNameInput");
  const SessionTimeInput = $.querySelector("#SessionTimeInput");
  const formData = new FormData();
  formData.append("title", SessionNameInput.value.trim());
  formData.append("time", SessionTimeInput.value.trim());
  formData.append("video", SessionCover);
  formData.append("free", SessionStatus);
  if(SessionNameInput.value !== '' && SessionTimeInput.value !== '' && SessionCover !== null && CourseID !== -1){
    const res = await fetch(`${BaseUrl()}courses/${CourseID}/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
      body: formData,
    });
    console.log(res);
  
    if (res.ok) {
      SessionNameInput.value = "",
      SessionTimeInput.value = "",
      Swal.fire({
        icon: "success",
        title: "جلسه جدید با موفقیت ثبت شد",
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "مشاهده کلیه جلسه ها",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("ok");
           GetAllSessions();
        }
      });
    } else if(res.status === 413){
      Swal.fire({
        icon: "warning",
        title: "حجم فایل بیش از حد مجاز می باشد",
        showConfirmButton: false,
        timer: 2000,
      });
    }else {
      Swal.fire({
        icon: "error",
        title: "خطایی در روند ثبت جلسه جدید ایجاد گردید",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }else{
    Swal.fire({
      icon: "error",
      title: "لطفا  فرم را تکمیل نمایید",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

const DeleteSession = async (sessionID) => {
  Swal.fire({
    title: "آیا برای حذف جلسه مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#f43f5e",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "حذف",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}courses/sessions/${sessionID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
          GetAllSessions();
        Swal.fire({

          icon: "success",
          title: "جلسه مورد نظر با موفقیت حذف گردید",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({

          icon: "error",
          title: "خطایی در روند حذف جلسه ایجاد گردید",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  });
};

export {
  GetAllSessions,
  CreateNewSession,
  PrepareCreateSessionFrom,
  DeleteSession,
};
