import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  ChangeGregorianDateToPersian,
} from "../../Funcs/Utils.js";
const $ = document;
let year, month, day;
let DepartmentID = null;
let SubDepartmentID = null;
let TicketPriorityID = 2;
let CourseName = undefined;

const ShowNewTicketFormBtn = $.querySelector('#ShowNewTicketFormBtn')
const NewTicketForm = $.querySelector('#NewTicketForm')

ShowNewTicketFormBtn.addEventListener('click' , (e) =>{
  e.preventDefault()
  NewTicketForm.classList.toggle('hidden')
})



const PrepareSendTicketForm = async () => {
    const DepartmentList = $.querySelector('#DepartmentList');
    const SubDepartmentList = $.querySelector('#SubDepartmentList');
    const TicketPriorityList = $.querySelector('#TicketPriorityList')
    const CoursesList = $.querySelector('#CoursesList')


    const res = await fetch(`${BaseUrl()}tickets/departments`);
    const Departments = await res.json();
    
    console.log(Departments);
    Departments.forEach(Department => {
      DepartmentList.insertAdjacentHTML('beforeend' , `
       <option value="${Department._id}">${Department.title}</option>
      `)
    })
    DepartmentList.addEventListener('change' , event => {
      event.preventDefault();
      DepartmentID = event.target.value;
      fetch(`${BaseUrl()}tickets/departments-subs/${event.target.value}`)
      .then(res => res.json())
      .then(subDepartments => {
       SubDepartmentList.innerHTML = '';
       SubDepartmentList.insertAdjacentHTML('beforeend' , `
       <option value="-1" disabled selected>نوع تیکت را انتخاب نمایید</option>
       `)
        subDepartments.forEach(subDepartment => {
          SubDepartmentList.insertAdjacentHTML('beforeend' , `
          <option value="${subDepartment._id}">${subDepartment.title}</option>
          `)
        })
      })
    })
    SubDepartmentList.addEventListener('change' , event =>  {
      SubDepartmentID = event.target.value;
      if(event.target.value === '658162ed4c3cb0798da17a17'){
        CoursesList.classList.remove('hidden')
      }else{
        CoursesList.classList.add('hidden')
      }
    })
    TicketPriorityList.addEventListener('change' , event => TicketPriorityID = event.target.value)
    const courseRes = await fetch(`${BaseUrl()}users/courses` , {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    });
    const UserCourses = await courseRes.json();
     UserCourses.forEach(UserCourse => {
      CoursesList.insertAdjacentHTML('beforeend' , `
      <option value="${UserCourse.course._id}">${UserCourse.course.name}</option>
      `)
     })
     CoursesList.addEventListener('change' , event => CourseName = event.target.value)

  }
  
  
  const SendNewTicket = async () => {
    const TicketTitleInput = $.querySelector('#TicketTitleInput')
    const TicketDescription = $.querySelector('#TicketDescription')

    const SendNewTicketInfos = {
      title: TicketTitleInput.value.trim(),
      body: TicketDescription.value.trim(),
      departmentID: DepartmentID,
      departmentSubID: SubDepartmentID,
      priority: TicketPriorityID,
      course: CourseName,
    }
    if(TicketTitleInput.value !== '' && TicketDescription.value !== '' && DepartmentID !== null && SubDepartmentID !== null){
      const res = await fetch(`${BaseUrl()}tickets` , {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GetToken()}`,
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(SendNewTicketInfos),
      });
      if(res.ok){
        TicketTitleInput.value = '',
        TicketDescription.value = '',
        DepartmentID = null,
        SubDepartmentID = null,
        CoursesList.classList.add('hidden'),
        Swal.fire({
          icon: "success",
          title: "  تیکت جدید با موفقیت انجام شد",
          showConfirmButton: false,
          timer: 2000,
        });
        ShowAllTickets()
      }else{
        Swal.fire({
          icon: "error",
          title: " در روند ثبت تیکت خطایی رخ داده است",
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
  }


const ShowAllTickets = async () => {
  const ShowAllTicketsBody = $.querySelector('#ShowAllTicketsBody');
 const CountOfAllTickets = $.querySelector('#CountOfAllTickets');
 let year , month , day;
  const res = await fetch(`${BaseUrl()}tickets/user` , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  });
  const UserTickets = await res.json();
  console.log(UserTickets);
  CountOfAllTickets.innerHTML = UserTickets.length;  
  if(UserTickets.length){
    UserTickets.forEach(UserTicket => {
      year = UserTicket.createdAt.slice(0, 4);
      month = UserTicket.createdAt.slice(5, 7);
      day = UserTicket.createdAt.slice(8, 10);
      ShowAllTicketsBody.insertAdjacentHTML('beforeend' , `
      <div class="flex-between p-3 bg-gray-100 my-5 shadow-md rounded-lg">
      <div  class="flex flex-col gap-4">
              <a href="./profile_AnswerTicket.html?id=${UserTicket._id}" class="font-DanaBold cursor-pointer line-clamp-1"> ${UserTicket.title}</a>
              <p class="font-DanaBold">${UserTicket.user}</p>
              <p class="bg-white px-4 py-3 rounded-lg text-center">${UserTicket.departmentID}</p>
              <p class="bg-gray-200 px-4 py-3 rounded-lg text-center">${UserTicket.departmentSubID}</p>
      </div>
      <div class="flex-center gap-3">
          ${
            UserTicket.answer ? `<p class="flex-center gap-2 bg-white border border-gray-100 px-3 py-1 rounded-lg rounded-tl-none">
            <span class="bg-emerald-500 w-2 h-2 rounded-full"></span>
            پاسخ داده شده</p>`: `<p class="flex-center gap-2 bg-white border border-gray-100 px-3 py-1 rounded-lg rounded-tl-none">
            <span class="bg-rose-500 w-2 h-2 rounded-full"></span>
            بدون پاسخ  </p>`
          }
          
            <div>
              <p>${ChangeGregorianDateToPersian(+year , +month , +day)}</p>
            </div>
      </div>
 </div>
      `)
    })
  }else{
    ShowAllTicketsBody.innerHTML = `<div class="font-DanaMd font-bold text-center text-amber-500 my-8 text-xl">کاربر گرامی تاکنون تیکتی ثبت نکرده اید.</div>`
  }


}

export {
  ShowAllTickets,
  PrepareSendTicketForm,
  SendNewTicket,
};
