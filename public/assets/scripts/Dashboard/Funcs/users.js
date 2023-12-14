import { GetToken, ShowSwalAlert , BaseUrl} from "../../Funcs/Utils.js";
const $ = document;
let ParentMenuID = undefined;


const GetAndShowAllUsers = async () => {
    const AllUsersTable = $.querySelector("#AllUsersTable tbody");
    AllUsersTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}users` , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
      'Content-Type' : 'application/json',
    },
  });
  const users = await res.json();
   users.forEach((user , index) => {
    AllUsersTable.insertAdjacentHTML(
        "beforeend",
        `
         <tr class="even:bg-gray-50 odd:bg-white child:py-3">
         <th>
        ${index + 1}
         </th>
         <td>
         ${user.name}
         </td>
         <td>
         ${user.username}
         </td>
         <td>
         ${user.phone}
         </td>
         <td>
         ${user.email}
         </td>
         <td>
         ${user.role === 'ADMIN' ? "مدیر سایت" : "کاربر"}
         </td>
         <td>
          <div onClick="BanUser('${user._id}')" class="text-zinc-900 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
     <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
          </div>
          </td>
          <td>
          <div class="text-sky-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
          </div>
          </td>
          <td>
          <div onClick="DeleteUser('${user._id}')" class="text-rose-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
          </div>
          </td>
       </tr>
         `
      )
   });

  return users;
}

const PrepareCreateMenuFor = async () => {
    const ParentMenuList = $.querySelector('#ParentMenuList');
    ParentMenuList.addEventListener('change' , event => ParentMenuID = event.target.value)
    const res = await fetch(`${BaseUrl()}menus`);
    const menus = await res.json();
    menus.forEach(menu => {
        ParentMenuList.insertAdjacentHTML('beforeend' , `
        <option value=${menu._id}>${menu.title}</option>
        `)
    })

}

const CreateNewMenu = async () => {
    const MenuNameInput = $.querySelector('#MenuNameInput')
    const MenuShortNameInput = $.querySelector('#MenuShortNameInput')
    const NewMenuInfos = {
        title : MenuNameInput.value.trim(),
        href : MenuShortNameInput.value.trim(),
        parent: ParentMenuID,
    }
    if(MenuNameInput.value !== '' || MenuShortNameInput.value !== ''){
        const res = await fetch(`${BaseUrl()}menus`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GetToken()}`,
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(NewMenuInfos),
          });
          if(res.ok){
            MenuNameInput.value = '',
            MenuShortNameInput.value = '',
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
          }else{
            ShowSwalAlert(
                "error",
                "خطایی در ثبت منوی جدید رخ داده است"
                );
          }
    }else{
        ShowSwalAlert(
            "error",
            "لطفا فرم را تکمیل نمایید"
            );
    }
}

const DeleteUser = async (userID) => {
    Swal.fire({
        title: "آیا برای حذف کاربر مطمعن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f43f5e",
        cancelButtonColor: "#3f3f46",
        confirmButtonText: "حذف",
        cancelButtonText: "انصراف"
      }).then( async (result) => {
        if (result.isConfirmed) {
          const res = await fetch(`${BaseUrl()}users/${userID}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${GetToken()}`,
            },
          });
          if(res.ok){
            GetAndShowAllUsers();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "کاربر مورد نظر با موفقیت حذف گردید",
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            Swal.fire({
              position: "top-center",
              icon: "error",
              title: "خطایی در روند حذف کاربر ایجاد گردید",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      });
}


const BanUser = async (userID) => {
    Swal.fire({
        title: "آیا برای مسدودسازی کاربر مطمعن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f43f5e",
        cancelButtonColor: "#3f3f46",
        confirmButtonText: "مسدودسازی",
        cancelButtonText: "انصراف"
      }).then( async (result) => {
        if (result.isConfirmed) {
          const res = await fetch(`${BaseUrl()}users/ban/${userID}`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${GetToken()}`,
            },
          });
          if(res.ok){
            GetAndShowAllUsers();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "کاربر مورد نظر با موفقیت مسدود گردید",
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            Swal.fire({
              position: "top-center",
              icon: "error",
              title: "خطایی در روند مسدودسازی کاربر ایجاد گردید",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      });
}

const CreateNewUser = async () => {

const UserFullNameInput = $.querySelector('#UserFullNameInput')
const UserNameInput = $.querySelector('#UserNameInput')
const UserPasswordInput = $.querySelector('#UserPasswordInput')
const UserPhoneInput = $.querySelector('#UserPhoneInput')
  const UserEmailInput = $.querySelector('#UserEmailInput')
  if(UserFullNameInput.value === '' || UserNameInput.value === '' || UserPasswordInput.value === '' || UserPhoneInput.value === '' || UserEmailInput.value === ''){
    ShowSwalAlert("info" , 'لطفا فرم ثبت نام کاربر را تکمیل نمایید')
}else{
  const NewUserInfos = {
      name: UserFullNameInput.value.trim(),
      username: UserNameInput.value.trim(),
      email: UserEmailInput.value.trim(),
      phone: UserPhoneInput.value.trim(),
      password: UserPasswordInput.value.trim(),
      confirmPassword: UserPasswordInput.value.trim(),  
  };
  fetch(`http://localhost:4000/v1/auth/register` , {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(NewUserInfos)
  })
  .then(res => {
      if(res.status === 201){
            ShowSwalAlert("success" , ' کاربر جدید با موفقیت اضافه شد')
            GetAndShowAllUsers();
            UserFullNameInput.value = '';
            UserNameInput.value = '';
            UserPasswordInput.value = '';
            UserPhoneInput.value = '';
            UserEmailInput.value = '';
      }else if(res.status === 409){
            ShowSwalAlert("error" , 'نام کاربری یا ایمیل از قبل موجود است')
      }else if(res.status === 403){
          ShowSwalAlert("error" ,'مسدود شده', 'شماره موبایل مورد نظر مسدود شده و امکان ثبت نام وجود ندارد')
      }
     return res.json()
  })

}
}

export {GetAndShowAllUsers , CreateNewMenu , PrepareCreateMenuFor , DeleteUser , BanUser , CreateNewUser}