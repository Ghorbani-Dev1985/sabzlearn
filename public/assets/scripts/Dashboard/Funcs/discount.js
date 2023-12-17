import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let CourseID = undefined;

const GetAndShowAllDiscount = async () => {
  const AllDiscountsTable = $.querySelector("#AllDiscountsTable tbody");
  AllDiscountsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}offs` , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  });
  const offs = await res.json();
  console.log(offs);
  let year, month, day;
  offs.forEach((off, index) => {
    year = off.createdAt.slice(0, 4);
    month = off.createdAt.slice(5, 7);
    day = off.createdAt.slice(8, 10);
    AllDiscountsTable.insertAdjacentHTML(
      "beforeend",
      `
         <tr class='even:bg-gray-50 odd:bg-white child:py-0'>
         <th>
        ${index + 1}
         </th>
         <td class="whitespace-break-spaces font-DanaMd leading-5">
          ${off.creator}
         </td>
         <td>
         ${ChangeGregorianDateToPersian(+year, +month, +day)}
         </td>
         <td>
         ${off.code}
         </td>
          <td>
         ${off.percent}
         </td>
          <td>
         ${off.max}
         </td>
            <td>
         ${off.uses === 0 ? 'استفاده نشده' : off.uses}
         </td>
          <td>
          <div onClick="DeleteDiscount('${off._id}')" class="text-rose-500 cursor-pointer flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
          </div>
          </td>
       </tr>
         `
    );
  });

  return offs;
};




const PrepareCreateDiscountForm = async () => {
  const CoursesList = $.querySelector("#CoursesList");
  CoursesList.addEventListener(
    "change",
    (event) => (CourseID = event.target.value)
  );
  const res = await fetch(`${BaseUrl()}courses`);
  const courses = await res.json();
  const NotFreeCourses = courses.filter(course => course.price !== 0);
  NotFreeCourses.forEach((course) => {
    CoursesList.insertAdjacentHTML(
      "beforeend",
      `
        <option value=${course._id}>${course.name}</option>
        `
    );
  });
};

const CreateNewDiscount = async () => {
   const DiscountCodeInput = $.querySelector('#DiscountCodeInput')
   const DiscountPercentInput = $.querySelector('#DiscountPercentInput')
   const DiscountMaxInput = $.querySelector('#DiscountMaxInput')
  const NewDiscountInfos = {
    code: DiscountCodeInput.value.trim(),
    percent: DiscountPercentInput.value.trim(),
    max: DiscountMaxInput.value.trim(),
    course: CourseID,
  };
  if (DiscountCodeInput.value !== "" && DiscountPercentInput.value !== "" && DiscountMaxInput.value !== "" ) {
    const res = await fetch(`${BaseUrl()}offs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewDiscountInfos),
    });
    if (res.ok) {
      DiscountCodeInput.value = '',
      DiscountPercentInput.value = '',
      DiscountMaxInput.value = ''
        Swal.fire({
          icon: "success",
          title: "کد تخفیف جدید با موفقیت ثبت شد",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "مشاهده کلیه کد تخفیف ها",
        }).then((result) => {
          if (result.isConfirmed) {
            GetAndShowAllDiscount();
          }
        });
    } else {
      Swal.fire({
      icon: "error",
      title: "خطایی در ایجاد کد تخفیف رخ داده است",
      showConfirmButton: false,
      timer: 2000,
    });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "خطایی در روند ایجاد کد تخفیف رخ داده است",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

const DeleteDiscount = async (offID) => {
  Swal.fire({
    title: "آیا برای حذف کد تخفیف مطمعن هستید؟",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#f43f5e",
    cancelButtonColor: "#3f3f46",
    confirmButtonText: "حذف",
    cancelButtonText: "انصراف",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(`${BaseUrl()}offs/${offID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
        },
      });
      if (res.ok) {
        GetAndShowAllDiscount();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "کد تخفیف مورد نظر با موفقیت حذف گردید",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "خطایی در روند حذف کد تخفیف رخ داده است",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  });
};

export {
  GetAndShowAllDiscount,
  PrepareCreateDiscountForm,
  CreateNewDiscount,
  DeleteDiscount,
};
