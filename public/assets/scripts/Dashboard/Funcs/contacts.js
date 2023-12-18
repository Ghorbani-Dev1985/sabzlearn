import { GetToken, ShowSwalAlert , BaseUrl , ChangeGregorianDateToPersian} from "../../Funcs/Utils.js";
const $ = document;



const GetAndShowAllContacts = async () => {
    const AllContactsTable = $.querySelector("#AllContactsTable tbody");
    AllContactsTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}contact`);
  const contacts = await res.json();
  let year , month , day;
  contacts.forEach((contact , index) => {
    year = contact.createdAt.slice(0 , 4) 
     month = contact.createdAt.slice(5 , 7) 
     day = contact.createdAt.slice(8 , 10) 
    AllContactsTable.insertAdjacentHTML(
      "beforeend",
        `
         <tr class='${contact.answer === 1 ? 'bg-emerald-100' : 'bg-rose-50'} child:text-center'>
         <td class="px-6 py-4">
         ${index + 1}
         </td>
         <td class="px-6 py-4">
         ${contact.name}
         </td>
         <td class="px-6 py-4">
       ${ChangeGregorianDateToPersian(+year , +month , +day)}
         </td>
         <td class="px-6 py-4">
         ${contact.phone}
         </td>
         <td class="px-6 py-4">
         ${contact.email}
         </td>
         <td class="px-6 py-4">
         <label for="my_modal_7" class="flex-center gap-2 bg-sky-500 text-white p-1 rounded-lg hover:bg-white hover:text-sky-500 border hover:border-sky-500 transition-colors" onclick='ShowContactBodyInModal(${JSON.stringify(contact.body)})'> مشاهده</label>   
         </td>
         <td class="px-6 py-4">
         <button class="flex-center gap-2 bg-sky-500 text-white px-3 py-1 rounded-lg hover:bg-white hover:text-sky-500 border hover:border-sky-500 transition-colors" onclick='AnswerContact(${JSON.stringify(contact.email)})'> پاسخ</button>
         </td>
          <td class="px-6 py-4">
          <div onClick="DeleteContact('${contact._id}')" class="text-rose-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
          </div>
          </td>
       </tr>
         `
      )
   });

  return contacts;
}

const ShowContactBodyInModal = (contactBody) => {
  console.log(contactBody);
  const ShowContactBody = $.querySelector('#ShowContactBody');
  ShowContactBody.innerHTML = contactBody;
}


const AnswerContact = async (contactEmail) => {
console.log(contactEmail);
  Swal.fire({
    title: "ارسال پاسخ",
    input: 'textarea',
    inputPlaceholder: 'متن پاسخ پیغام',
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "   ثبت پاسخ پیام",
  }).then(async (result) => {
    if (result.isConfirmed && result.value !== '') {
        const AnswerContactInfos = {
    email: contactEmail,
    answer: result.value,
  };
        const res = await fetch(`${BaseUrl()}contact/answer`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GetToken()}`,
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(AnswerContactInfos),
        });

        const AnswerResult = await res.json();
        if(res.ok){
          Swal.fire({
              icon: "success",
              title: "پاسخ با موفقیت ارسال شد",
              showConfirmButton: true,
              showCancelButton: false,
              confirmButtonText: 'تایید'
            }).then((result) => {
              if(result.isConfirmed){
                GetAndShowAllContacts();
              }
            })
        }else{
          Swal.fire({
            icon: "error",
            title:   "خطایی در ارسال پاسخ پیغام رخ داده است",
            timer: 2000,
            showConfirmButton: false,
            showCancelButton: false,
          })
        }

    }
  });

  //  const ContactEmailInput = $.querySelector('#ContactEmailInput')
  // const ContactAnswerTextarea = $.querySelector('#ContactAnswerTextarea')
  // ContactEmailInput.value = contactEmail;

  //  if(ContactEmailInput.value !== '' || ContactAnswerTextarea.value !== ''){
  //  }else{
  //   ShowSwalAlert(
  //     "error",
  //     "لطفا فرم پاسخ را تکمیل نمایید"
  //     );
  //  }
}


const CreateNewCategory = async () => {
   const CategoryNameInput = $.querySelector('#CategoryNameInput')
  const CategoryUrlInput = $.querySelector('#CategoryUrlInput')
    const NewCategoryInfos = {
        title : CategoryNameInput.value.trim(),
        name : CategoryUrlInput.value.trim(),
    }
    if(CategoryNameInput.value !== '' || CategoryUrlInput.value !== ''){
        const res = await fetch(`${BaseUrl()}category`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GetToken()}`,
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(NewCategoryInfos),
          });
          if(res.ok){
            CategoryNameInput.value = '',
            CategoryUrlInput.value = '',
            Swal.fire({
                icon: "success",
                title: "دسته بندی جدید با موفقیت ثبت شد",
                showCancelButton: false,
                showConfirmButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "مشاهده کلیه دسته بندی ها",
              }).then((result) => {
                if (result.isConfirmed) {
                 GetAndShowAllCategories();

                }
              });
          }else{
            ShowSwalAlert(
                "error",
                "خطایی در ثبت دسته بندی جدید رخ داده است"
                );
          }
    }else{
        ShowSwalAlert(
            "error",
            "لطفا فرم را تکمیل نمایید"
            );
    }
}

const DeleteContact = async (contactID) => {
    Swal.fire({
        title: "آیا برای حذف پیغام مطمعن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f43f5e",
        cancelButtonColor: "#3f3f46",
        confirmButtonText: "حذف",
        cancelButtonText: "انصراف"
      }).then( async (result) => {
        if (result.isConfirmed) {
          const res = await fetch(`${BaseUrl()}contact/${contactID}`, {
            method: "DELETE",
            // headers: {
            //   Authorization: `Bearer ${GetToken()}`,
            // },
          });
          if(res.ok){
            GetAndShowAllContacts();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "پیغام  مورد نظر با موفقیت حذف گردید",
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            Swal.fire({
              position: "top-center",
              icon: "error",
              title: "خطایی در روند حذف  پیغام ایجاد گردید",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      });
}


export {GetAndShowAllContacts , CreateNewCategory , DeleteContact , ShowContactBodyInModal , AnswerContact  }