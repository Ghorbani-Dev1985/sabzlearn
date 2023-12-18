import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
} from "../../Funcs/Utils.js";
const $ = document;


const EditUserInfos = async () => {

  const FullNameInput = $.querySelector('#FullNameInput')
const UserNameInput = $.querySelector('#UserNameInput')
  const UserPasswordInput = $.querySelector('#UserPasswordInput')
const UserEmailInput = $.querySelector('#UserEmailInput')
const UserPhoneInput = $.querySelector('#UserPhoneInput')

 if(FullNameInput.value !== '' && UserNameInput.value !== '' && UserPasswordInput.value !== '' && UserEmailInput.value !== '' && UserPhoneInput.value !== ''){
   const UserInfos = {
    name: FullNameInput.value.trim(),
    username: UserNameInput.value.trim(),
    email: UserEmailInput.value.trim(),
    password: UserPasswordInput.value.trim(),
    phone: UserPhoneInput.value.trim(),
   }
   const res = await fetch(`${BaseUrl()}users` , {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(UserInfos)
  });
  const result = await res.json();
  if(res.ok){
    FullNameInput.value = '';
    UserNameInput.value = '';
    UserPasswordInput.value = '';
    UserEmailInput.value = '';
    UserPhoneInput.value = '';
        Swal.fire({
          icon: "success",
          title: "   ویرایش اطلاعات با موفقیت انجام شد",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "خطایی در روند ویرایش اطلاعات رخ داده است",
          showConfirmButton: false,
          timer: 2000,
        });
      }

 }else{
  Swal.fire({
    icon: "error",
    title: "لطفا فرم را تکمیل نمایید",
    showConfirmButton: false,
    timer: 2000,
  });
 }

};




export {
  EditUserInfos,
};
