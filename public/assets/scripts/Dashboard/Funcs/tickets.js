import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let ParentMenuID = undefined;

const GetAndShowAllTickets = async () => {
  const AllTicketsTable = $.querySelector("#AllTicketsTable tbody");
  AllTicketsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}tickets` , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    }
  });
  const tickets = await res.json();
  let year, month, day;
  tickets.forEach((ticket, index) => {
    year = ticket.createdAt.slice(0, 4);
    month = ticket.createdAt.slice(5, 7);
    day = ticket.createdAt.slice(8, 10);
    console.log(ticket);
    AllTicketsTable.insertAdjacentHTML(
      "beforeend",
      `
         <tr class='${ticket.answer === 1 ? "bg-emerald-100" : "bg-rose-50"} child:text-center'>
         <td class="px-6 py-4">
        ${index + 1}
         </td>
         <td class="whitespace-break-spaces font-DanaMd leading-5">
          ${ticket.user}
         </td>
         <td class="px-6 py-4">
         ${ticket.title}
         </td>
          <td class="px-6 py-4">
          ${ChangeGregorianDateToPersian(+year, +month, +day)}
          </td>
          <td class="px-6 py-4">
          ${ticket.departmentID}
          </td>
       <td class="px-6 py-4">
       ${ticket.departmentSubID}
       </td>
       <td class="px-6 py-4">
       ${ticket.course ? `${ticket.course}` : "--"}
       </td>
            <td class="px-6 py-4">
              ${ticket.priority === 1 ? 'بالا' : ''}
              ${ticket.priority === 2 ? 'متوسط' : ''}
              ${ticket.priority === 3 ? 'کم' : ''}
                </td>
          <td class="px-6 py-4">
          <button class="flex-center gap-2 bg-violet-700 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-violet-700 border hover:border-violet-700 transition-colors" onclick='ShowTicketBody(${JSON.stringify(
            ticket.body
          )})'> مشاهده</button>
          </td>
          <td class="px-6 py-4">
           <button class="flex-center gap-2 bg-orange-700 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-orange-700 border hover:border-orange-700 transition-colors" onclick='AnswerTicket(${JSON.stringify(ticket._id)})'> پاسخ</button>
          </td>
          
          <td class="px-6 py-4">
          <div onClick="DeleteComment('${ticket._id}')" class="text-rose-500 cursor-pointer flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
          </div>
          </td>
       </tr>
         `
    );
  });

  return tickets;
};

const ShowTicketBody = (ticketBody) => {
  Swal.fire({
    text: ticketBody,
    inputPlaceholder: "متن تیکت",
    showCancelButton: false,
    showConfirmButton: false,
  });
};



const AnswerTicket = async (ticketID) => {
    Swal.fire({
      title: "ارسال پاسخ",
      input: 'textarea',
      inputPlaceholder: 'متن پاسخ تیکت',
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "   ثبت پاسخ تیکت",
    }).then(async (result) => {
      if (result.isConfirmed && result.value !== '') {
          const AnswerTicketInfos = {
      ticketID : ticketID,    
      body: result.value,
    };
           await fetch(`${BaseUrl()}tickets/answer`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GetToken()}`,
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(AnswerTicketInfos),
          }).then(res => {
            if(res.ok){
              Swal.fire({
                  icon: "success",
                  title: "پاسخ تیکت با موفقیت ارسال شد",
                  showConfirmButton: true,
                  showCancelButton: false,
                  confirmButtonText: 'تایید'
                }).then((result) => {
                  if(result.isConfirmed){
                    GetAndShowAllTickets();
                  }
                })
            }else{
              Swal.fire({
                icon: "error",
                title:   "خطایی در ارسال پاسخ تیکت رخ داده است",
                timer: 2000,
                showConfirmButton: false,
                showCancelButton: false,
              })
            }
          })

      }else{
        Swal.fire({
          icon: "error",
          title:   "لطفا پاسخ تیکت را وارد نمایید",
          timer: 2000,
          showConfirmButton: false,
          showCancelButton: false,
        })
      }
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
  GetAndShowAllTickets,
  CreateNewMenu,
  ShowTicketBody,
  AnswerTicket,
  DeleteComment,
};
