import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let year, month, day;
const UserFullNameInput = $.querySelector('#UserFullNameInput')
const UserNameInput = $.querySelector('#UserNameInput')
const UserPhoneInput = $.querySelector('#UserPhoneInput')
const UserEmailInput = $.querySelector('#UserEmailInput')
const UserPasswordInput = $.querySelector('#UserPasswordInput')



const ShowUserInfos = async () => {
  const res = await fetch(`http://localhost:4000/v1/auth/me` , {
    headers:{
        Authorization : `Bearer ${GetToken()}`,
    },
});

const UserInfos = await res.json()

  UserFullNameInput.value = UserInfos.name;
  UserNameInput.value = UserInfos.username;
  UserPhoneInput.value = UserInfos.phone;
  UserEmailInput.value = UserInfos.email;

return UserInfos;


}


const EditUserDetails = async () => {

  const UpdateUserInfos = {
    name: UserFullNameInput.value.trim(),
    username: UserNameInput.value.trim(),
    email: UserEmailInput.value.trim(),
    password: UserPasswordInput.value.trim(),
    phone: UserPhoneInput.value.trim(),
  }
  if(UserPasswordInput.value !== ''){
    const res = await fetch(`${BaseUrl()}users` , {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(UpdateUserInfos),
    });
    if(res.ok){
      Swal.fire({
        icon: "success",
        title: "تغییرات جزییات حساب با موفقیت انجام شد",
        showConfirmButton: false,
        timer: 2000,
      });
    }else{
      Swal.fire({
        icon: "error",
        title: " در روند ثبت تغییرات خطایی رخ داده است",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }else{
    Swal.fire({
      icon: "error",
      title: "مقدار جدید کلمه عبور را وارد نمایید",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  
}


export {
  ShowUserInfos,
  EditUserDetails,
};
