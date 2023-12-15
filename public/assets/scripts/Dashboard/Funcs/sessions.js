import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let CategoryID = -1;
let CourseStatus = "start";
let CourseCover = null;

const GetAllSessions = async () => {
  const CountOfAllSessions = $.querySelector("#CountOfAllSessions");
  const AllSessionsTable = $.querySelector("#AllSessionsTable tbody");
  AllSessionsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}courses/sessions`);
  const sessions = await res.json();
  CountOfAllSessions.innerHTML = sessions.length;
  let year, month, day;
  sessions.forEach((session, index) => {
    year = session.createdAt.slice(0, 4);
    month = session.createdAt.slice(5, 7);
    day = session.createdAt.slice(8, 10);
    AllSessionsTable.insertAdjacentHTML(
      "beforeend",
      `
       <tr class="even:bg-gray-50 odd:bg-white child:py-0">
       <th>
      ${index + 1}
       </th>
       <td class="whitespace-break-spaces font-DanaMd leading-5">
        ${session.title}
       </td>
       <td>
        ${ChangeGregorianDateToPersian(+year, +month, +day)}
       </td>
       <td>
        ${session.time}
       </td>
       <td>         ${session.course.name}        </td>
       <td>
       ${BaseUrl()}${session.video}
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
        <div onClick="DeleteCourse('${
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

const PrepareCreateCourseFrom = async () => {
  const CourseCategoryList = $.querySelector("#CourseCategoryList");
  const PresSellCourseRadio = $.querySelector("#PresSellCourseRadio");
  const StartCourseRadio = $.querySelector("#StartCourseRadio");
  const CourseCoverUploader = $.querySelector("#CourseCoverUploader");
  const ShowFileNameUpload = $.querySelector("#ShowFileNameUpload");
  const res = await fetch(`${BaseUrl()}category`);
  const categories = await res.json();
  categories.forEach((category) => {
    CourseCategoryList.insertAdjacentHTML(
      "beforeend",
      `
       <option value=${category._id}>${category.title}</option>
      `
    );
  });
  CourseCategoryList.addEventListener(
    "change",
    (event) => (CategoryID = event.target.value)
  );
  PresSellCourseRadio.addEventListener(
    "change",
    (event) => (CourseStatus = event.target.value)
  );
  StartCourseRadio.addEventListener(
    "change",
    (event) => (CourseStatus = event.target.value)
  );
  CourseCoverUploader.addEventListener("change", (event) => {
    ShowFileNameUpload.innerHTML = event.target.files[0].name;
    CourseCover = event.target.files[0];
  });
};

const CreateNewCourse = async () => {
  const CourseNameInput = $.querySelector("#CourseNameInput");
  const CoursePriceInput = $.querySelector("#CoursePriceInput");
  const CourseDescription = $.querySelector("#CourseDescription");
  const CourseShortNameInput = $.querySelector("#CourseShortNameInput");
  const CourseSupportInput = $.querySelector("#CourseSupportInput");
  const formData = new FormData();
  formData.append("name", CourseNameInput.value.trim());
  formData.append("price", CoursePriceInput.value.trim());
  formData.append("description", CourseDescription.value.trim());
  formData.append("shortName", CourseShortNameInput.value.trim());
  formData.append("support", CourseSupportInput.value.trim());
  formData.append("categoryID", CategoryID);
  formData.append("status", CourseStatus);
  formData.append("cover", CourseCover);
  const res = await fetch(`${BaseUrl()}courses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
    body: formData,
  });
  console.log(res);

  if (res.status === 201) {
    Swal.fire({
      icon: "success",
      title: "دوره جدید با موفقیت ثبت شد",
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "مشاهده کلیه دوره ها",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("ok");
        // GetAllCourses();
      }
    });
  } else {
    ShowSwalAlert("error", "خطایی در ثبت دوره جدید رخ داده است");
  }
  // CourseNameInput.value = '';
  // CoursePriceInput.value = '';
  // CourseDescription.value = '';
  // CourseShortNameInput.value = '';
  // CourseSupportInput.value = '';
};

const DeleteCourse = async (courseID) => {
  Swal.fire({
    title: "آیا برای حذف دوره مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#f43f5e",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "حذف",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}courses${courseID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
        GetAllCourses();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "دوره مورد نظر با موفقیت حذف گردید",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "خطایی در روند حذف دوره ایجاد گردید",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  });
};

export {
  GetAllSessions,
  CreateNewCourse,
  PrepareCreateCourseFrom,
  DeleteCourse,
};
