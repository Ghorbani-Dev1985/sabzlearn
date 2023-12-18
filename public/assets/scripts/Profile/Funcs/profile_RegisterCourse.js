import {
  GetToken,
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


const GetAndShowAllUserCourses = async () => {

    const ShowAllRegisterCourses = $.querySelector('#ShowAllRegisterCourses');
const ShowAllRegisterIsCompleteCourses = $.querySelector('#ShowAllRegisterIsCompleteCourses');
const ShowAllRegisterStartCourses = $.querySelector('#ShowAllRegisterStartCourses');
const ShowAllRegisterIsFreeCourses = $.querySelector('#ShowAllRegisterIsFreeCourses')
const ShowAllRegisterIsNotefreeCourses = $.querySelector('#ShowAllRegisterIsNotefreeCourses')

    const res = await fetch(`${BaseUrl()}users/courses` , {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    });
    const UserOrders = await res.json();
    const UserOrdersFree = UserOrders.filter(UserOrder => UserOrder.course.price === 0)
    const UserOrdersNoteFree = UserOrders.filter(UserOrder => UserOrder.course.price !== 0)
    const UserOrdersIsComplete = UserOrders.filter(UserOrder => UserOrder.course.isComplete === 1)
    const UserOrdersStarted = UserOrders.filter(UserOrder => UserOrder.course.status === 'start')
    console.log(UserOrdersStarted);
    if(UserOrders.length){
          UserOrders.forEach(UserOrder => {
       ShowAllRegisterCourses.insertAdjacentHTML('beforeend' , `
       <div class="card lg:card-side bg-gray-100 shadow-xl mb-10">
       <figure><img src="http://localhost:4000/courses/covers/${UserOrder.course.cover}" class="object-fill" alt="ghorbani_dev.ir"/></figure>
       <div class="card-body p-5">
         <h2 class="card-title font-DanaBold text-xl line-clamp-1">${UserOrder.course.name}</h2>
         <p class="w-96 line-clamp-4">${UserOrder.course.description}</p>
         <div class="card-actions flex-between">
           <div class="flex-center text-sky-500 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
       </svg>
        ${UserOrder.course.status === "start" ? 'درحال برگزاری' : 'درحال پیش فروش'}
           </div>
           <div class="flex-center text-violet-600 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
         </svg>         
        ${UserOrder.course.support}
           </div>
         </div>
       </div>
     </div>
       `)
    });
    }else{
      ShowAllRegisterCourses.innerHTML = `<div class="font-DanaMd font-bold text-center text-amber-500">شما در هیچ دوره ای ثبت نام نکرده اید</div>`
    }

    if(UserOrdersIsComplete.length){
       UserOrdersIsComplete.forEach(UserOrderIsComplete => {
      ShowAllRegisterIsCompleteCourses.insertAdjacentHTML('beforeend' , `
      <div class="card lg:card-side bg-gray-100 shadow-xl mb-10">
       <figure><img src="http://localhost:4000/courses/covers/${UserOrderIsComplete.course.cover}" class="object-fill" alt="ghorbani_dev.ir"/></figure>
       <div class="card-body p-5">
         <h2 class="card-title font-DanaBold text-xl line-clamp-1">${UserOrderIsComplete.course.name}</h2>
         <p class="w-96 line-clamp-4">${UserOrderIsComplete.course.description}</p>
         <div class="card-actions flex-between">
           <div class="flex-center text-sky-500 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
       </svg>
        ${UserOrderIsComplete.course.status === "start" ? 'درحال برگزاری' : 'درحال پیش فروش'}
           </div>
           <div class="flex-center text-violet-600 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
         </svg>         
        ${UserOrderIsComplete.course.support}
           </div>
         </div>
       </div>
     </div>
      `)
    })
    }else{
      ShowAllRegisterIsCompleteCourses.innerHTML = `<div class="font-DanaMd font-bold text-center text-amber-500">   دوره تکمیل شده وجود ندارد</div>`
    }
   
  if(UserOrdersStarted.length){
     UserOrdersStarted.forEach(UserOrderStarted => {
      ShowAllRegisterStartCourses.insertAdjacentHTML('beforeend' , `
      <div class="card lg:card-side bg-gray-100 shadow-xl mb-10">
       <figure><img src="http://localhost:4000/courses/covers/${UserOrderStarted.course.cover}" class="object-fill" alt="ghorbani_dev.ir"/></figure>
       <div class="card-body p-5">
         <h2 class="card-title font-DanaBold text-xl line-clamp-1">${UserOrderStarted.course.name}</h2>
         <p class="w-96 line-clamp-4">${UserOrderStarted.course.description}</p>
         <div class="card-actions flex-between">
           <div class="flex-center text-sky-500 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
       </svg>
        ${UserOrderStarted.course.status === "start" ? 'درحال برگزاری' : 'درحال پیش فروش'}
           </div>
           <div class="flex-center text-violet-600 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
         </svg>         
        ${UserOrderStarted.course.support}
           </div>
         </div>
       </div>
     </div>
      `)
    }) 
  }else{
    ShowAllRegisterStartCourses.innerHTML = `<div class="font-DanaMd font-bold text-center text-amber-500">   دوره فعالی وجود ندارد</div>`
  }
   if(UserOrdersFree.length){
    UserOrdersFree.forEach(UserOrderFree => {
      ShowAllRegisterIsFreeCourses.insertAdjacentHTML('beforeend' , `
      <div class="card lg:card-side bg-gray-100 shadow-xl mb-10">
       <figure><img src="http://localhost:4000/courses/covers/${UserOrderFree.course.cover}" class="object-fill" alt="ghorbani_dev.ir"/></figure>
       <div class="card-body p-5">
         <h2 class="card-title font-DanaBold text-xl line-clamp-1">${UserOrderFree.course.name}</h2>
         <p class="w-96 line-clamp-4">${UserOrderFree.course.description}</p>
         <div class="card-actions flex-between">
           <div class="flex-center text-sky-500 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
       </svg>
        ${UserOrderFree.course.status === "start" ? 'درحال برگزاری' : 'درحال پیش فروش'}
           </div>
           <div class="flex-center text-violet-600 gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
         </svg>         
        ${UserOrderFree.course.support}
           </div>
         </div>
       </div>
     </div>
      `)
    })
   }else{
    ShowAllRegisterIsFreeCourses.innerHTML = `<div class="font-DanaMd font-bold text-center text-amber-500">   دوره رایگانی وجود ندارد</div>`
   }
   if(UserOrdersNoteFree.length){
    UserOrdersNoteFree.forEach(UserOrderNoteFree => {
      ShowAllRegisterIsNotefreeCourses.insertAdjacentHTML('beforeend' , `
      <div class="card lg:card-side bg-gray-100 shadow-xl mb-10">
      <figure><img src="http://localhost:4000/courses/covers/${UserOrderNoteFree.course.cover}" class="object-fill" alt="ghorbani_dev.ir"/></figure>
      <div class="card-body p-5">
        <h2 class="card-title font-DanaBold text-xl line-clamp-1">${UserOrderNoteFree.course.name}</h2>
        <p class="w-96 line-clamp-4">${UserOrderNoteFree.course.description}</p>
        <div class="card-actions flex-between">
          <div class="flex-center text-sky-500 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
       ${UserOrderNoteFree.course.status === "start" ? 'درحال برگزاری' : 'درحال پیش فروش'}
          </div>
          <div class="flex-center text-violet-600 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
        </svg>         
       ${UserOrderNoteFree.course.support}
          </div>
        </div>
      </div>
    </div>
      `)
    })
   }else{
    ShowAllRegisterIsNotefreeCourses.innerHTML = `<div class="font-DanaMd font-bold text-center text-amber-500">   دوره پولی وجود ندارد</div>`
   }
}


export {
  ShowUserInfos,
  GetAndShowAllUserCourses,
};
