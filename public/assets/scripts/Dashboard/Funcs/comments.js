import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let ParentMenuID = undefined;

const GetAndShowAllComments = async () => {
  const AllCommentsTable = $.querySelector("#AllCommentsTable tbody");
  AllCommentsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}comments`);
  const comments = await res.json();
  let year, month, day;
  comments.forEach((comment, index) => {
    year = comment.createdAt.slice(0, 4);
    month = comment.createdAt.slice(5, 7);
    day = comment.createdAt.slice(8, 10);
    console.log(comment);
    AllCommentsTable.insertAdjacentHTML(
      "beforeend",
      `
         <tr class='${comment.answer === 1 ? "bg-emerald-100" : "bg-rose-50"}'>
         <th>
        ${index + 1}
         </th>
         <td class="whitespace-break-spaces font-DanaMd leading-5">
          ${comment.creator.name}
         </td>
         <td>
         ${comment.course.name}
         </td>
          <td>
          ${ChangeGregorianDateToPersian(+year, +month, +day)}
          </td>
          <td>
          <div class="flex-center">
          ${Array(comment.score)
            .fill(0)
            .map(
              (score) => `
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-3 h-3">
             <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
           </svg>
           `
            )
            .join("")}
        </div>
          </td>
          <td>
          <button class="flex-center gap-2 bg-violet-700 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-violet-700 border hover:border-violet-700 transition-colors" onclick='ShowCommentBody(${JSON.stringify(
            comment.body
          )})'> مشاهده</button>
          </td>
          <td>
           <button class="flex-center gap-2 bg-orange-700 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-orange-700 border hover:border-orange-700 transition-colors" onclick='AnswerComment(${JSON.stringify(comment._id)})'> پاسخ</button>
          </td>
          <td>
          <div onClick="AcceptComment('${comment._id}')" class="text-sky-500 cursor-pointer flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>        
          </div>
          </td>
          <td>
          <div onClick="RejectComment('${comment._id}')" class="text-rose-500 cursor-pointer flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          </td>
          <td>
          <div onClick="DeleteComment('${comment._id}')" class="text-rose-500 cursor-pointer flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
          </div>
          </td>
       </tr>
         `
    );
  });

  return comments;
};

const ShowCommentBody = (commentBody) => {
  Swal.fire({
    text: commentBody,
    inputPlaceholder: "متن کامنت",
    showCancelButton: false,
    showConfirmButton: false,
  });
};

const AcceptComment = (commentID) => {
  Swal.fire({
    title: "آیا برای تایید کامنت مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#10b981",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "تایید",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}comments/accept/${commentID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
        GetAndShowAllComments();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: " کامنت مورد نظر با موفقیت تایید گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "خطایی در روند تایید کامنت ایجاد گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  });
};

const RejectComment = (commentID) => {
  Swal.fire({
    title: "آیا برای رد کامنت مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "رد کردن",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}comments/reject/${commentID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
        GetAndShowAllComments();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: " کامنت مورد نظر با موفقیت رد گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "خطایی در روند رد کامنت ایجاد گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  });
};


const AnswerComment = async (commentID) => {
    Swal.fire({
      title: "ارسال پاسخ",
      input: 'textarea',
      inputPlaceholder: 'متن پاسخ کامنت',
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "   ثبت پاسخ کامنت",
    }).then(async (result) => {
      if (result.isConfirmed && result.value !== '') {
          const AnswerCommentInfos = {
      body: result.value,
    };
           await fetch(`${BaseUrl()}comments/answer/${commentID}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GetToken()}`,
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(AnswerCommentInfos),
          }).then(res => {
            if(res.ok){
              Swal.fire({
                  icon: "success",
                  title: "پاسخ کامنت با موفقیت ارسال شد",
                  showConfirmButton: true,
                  showCancelButton: false,
                  confirmButtonText: 'تایید'
                }).then((result) => {
                  if(result.isConfirmed){
                    GetAndShowAllComments();
                  }
                })
            }else{
              Swal.fire({
                icon: "error",
                title:   "خطایی در ارسال پاسخ کامنت رخ داده است",
                timer: 2000,
                showConfirmButton: false,
                showCancelButton: false,
              })
            }
          })

      }else{
        Swal.fire({
          icon: "error",
          title:   "لطفا پاسخ کامنت را وارد نمایید",
          timer: 2000,
          showConfirmButton: false,
          showCancelButton: false,
        })
      }
  });
};

const PrepareCreateMenuFor = async () => {
  const ParentMenuList = $.querySelector("#ParentMenuList");
  ParentMenuList.addEventListener(
    "change",
    (event) => (ParentMenuID = event.target.value)
  );
  const res = await fetch(`${BaseUrl()}menus`);
  const menus = await res.json();
  menus.forEach((menu) => {
    ParentMenuList.insertAdjacentHTML(
      "beforeend",
      `
        <option value=${menu._id}>${menu.title}</option>
        `
    );
  });
};

const CreateNewMenu = async () => {
  const MenuNameInput = $.querySelector("#MenuNameInput");
  const MenuShortNameInput = $.querySelector("#MenuShortNameInput");
  const NewMenuInfos = {
    title: MenuNameInput.value.trim(),
    href: MenuShortNameInput.value.trim(),
    parent: ParentMenuID,
  };
  if (MenuNameInput.value !== "" || MenuShortNameInput.value !== "") {
    const res = await fetch(`${BaseUrl()}menus`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewMenuInfos),
    });
    if (res.ok) {
      (MenuNameInput.value = ""),
        (MenuShortNameInput.value = ""),
        Swal.fire({
          icon: "success",
          title: "منوی جدید با موفقیت ثبت شد",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "مشاهده کلیه منو ها",
        }).then((result) => {
          if (result.isConfirmed) {
            GetAndShowAllMenus();
          }
        });
    } else {
      ShowSwalAlert("error", "خطایی در ثبت منوی جدید رخ داده است");
    }
  } else {
    ShowSwalAlert("error", "لطفا فرم را تکمیل نمایید");
  }
};

const DeleteComment = async (commentID) => {
  Swal.fire({
    title: "آیا برای حذف کامنت مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#f43f5e",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "حذف",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}comments/${commentID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
        GetAndShowAllComments();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "کامنت مورد نظر با موفقیت حذف گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "خطایی در روند حذف کامنت ایجاد گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  });
};

export {
  GetAndShowAllComments,
  CreateNewMenu,
  ShowCommentBody,
  AnswerComment,
  AcceptComment,
  RejectComment,
  PrepareCreateMenuFor,
  DeleteComment,
};
