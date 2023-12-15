import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let CategoryID = -1;
let SessionStatus = 0;
let SessionCover = null;

const GetAllBlogs = async () => {
  const CountOfAllSessions = $.querySelector("#CountOfAllSessions");
  const AllBlogsTable = $.querySelector("#AllBlogsTable tbody");
  AllBlogsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}articles`);
  const articles = await res.json();
  CountOfAllSessions.innerHTML = articles.length;
  let year, month, day;
  articles.forEach((article, index) => {
    year = article.createdAt.slice(0, 4);
    month = article.createdAt.slice(5, 7);
    day = article.createdAt.slice(8, 10);
    AllBlogsTable.insertAdjacentHTML(
      "beforeend",
      `
       <tr class="even:bg-gray-50 odd:bg-white">
       <th>
      ${index + 1}
       </th>
       <td class="font-DanaMd leading-5">
        ${article.title}
       </td>
       <td class="font-DanaMd leading-5">
       ${article.description}
      </td>
      <td class="font-DanaMd leading-5">
      <button class="flex-center gap-2 bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-sky-500 border hover:border-sky-500 transition-colors" onclick='ShowBlogBody(${JSON.stringify(
        article.body
      )})'> مشاهده</button>
      </td>
       <td class="font-DanaMd leading-5">
      <img src=http://localhost:4000/courses/covers/${
        article.cover
      } alt="ghorbani.dev.ir" />
      </td>
       <td>
        ${ChangeGregorianDateToPersian(+year, +month, +day)}
       </td>
       <td>
        ${article.creator.name}
       </td>
       <td>
       ${article.creator.username}
      </td>
      <td>
      ${article.creator.phone}
     </td>
     <td>
     ${article.creator.email}
    </td>
    <td>
     ${article.creator.role === "ADMIN" ? "مدیر سایت" : "کاربر"}
    </td>
    <td>
    ${article.publish === 1 ? " منتشر شده" : "پیش نویس "}
   </td>
        <td>
        <div onClick="DeleteArticle('${
          article._id
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

  return articles;
};

const ShowBlogBody = (blogBody) => {
  Swal.fire({
    text: blogBody,
    inputPlaceholder: "متن پاسخ پیغام",
    showCancelButton: false,
    showConfirmButton: false,
  });
};

const PrepareCreateBlogFrom = async () => {
  const BlogCategoryList = $.querySelector("#BlogCategoryList");

  const BlogCoverUploader = $.querySelector("#BlogCoverUploader");
  const ShowFileNameUpload = $.querySelector("#ShowFileNameUpload");
  const res = await fetch(`${BaseUrl()}category`);
  const categories = await res.json();
  console.log(categories);
  categories.forEach((category) => {
    BlogCategoryList.insertAdjacentHTML(
      "beforeend",
      `
       <option value=${category._id}>${category.title}</option>
      `
    );
  });
  BlogCategoryList.addEventListener(
    "change",
    (event) => (CategoryID = event.target.value)
  );
  BlogCoverUploader.addEventListener("change", (event) => {
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
  if (
    SessionNameInput.value !== "" &&
    SessionTimeInput.value !== "" &&
    SessionCover !== null &&
    CourseID !== -1
  ) {
    const res = await fetch(`${BaseUrl()}courses/${CourseID}/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
      body: formData,
    });
    console.log(res);

    if (res.ok) {
      (SessionNameInput.value = ""),
        (SessionTimeInput.value = ""),
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
    } else if (res.status === 413) {
      Swal.fire({
        icon: "warning",
        title: "حجم فایل بیش از حد مجاز می باشد",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "خطایی در روند ثبت جلسه جدید ایجاد گردید",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } else {
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
  GetAllBlogs,
  ShowBlogBody,
  CreateNewSession,
  PrepareCreateBlogFrom,
  DeleteSession,
};
