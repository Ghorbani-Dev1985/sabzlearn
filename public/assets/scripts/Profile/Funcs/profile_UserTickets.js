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
    SubDepartmentList.addEventListener('change' , event =>  SubDepartmentID = event.target.value)
    TicketPriorityList.addEventListener('change' , event => TicketPriorityID = event.target.value)
  }
  
  
  const SendNewTicket = async () => {
    const TicketTitleInput = $.querySelector('#TicketTitleInput')
    const TicketDescription = $.querySelector('#TicketDescription')

    const SendNewTicketInfos = {
      title: TicketTitleInput.value.trim(),
      body: TicketDescription.value.trim(),
      departmentID: DepartmentID,
      departmentSubID: SubDepartmentID,
      priority: TicketPriorityID
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
        Swal.fire({
          icon: "success",
          title: "  تیکت جدید با موفقیت انجام شد",
          showConfirmButton: false,
          timer: 2000,
        });
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
      <div class="flex-between p-3">
      <div  class="flex flex-col gap-4">
              <p> ${UserTicket.title}</p>
              <p>${UserTicket.user}</p>
              <p class="bg-white px-4 py-3 rounded-lg text-center">${UserTicket.departmentID}</p>
              <p class="bg-gray-200 px-4 py-3 rounded-lg text-center">${UserTicket.departmentSubID}</p>
      </div>
      <div class="flex-center gap-3">
          ${
            UserTicket.isAnswer ? `<p class="flex-center gap-2 bg-white border border-gray-100 px-3 py-1 rounded-lg rounded-tl-none">
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
