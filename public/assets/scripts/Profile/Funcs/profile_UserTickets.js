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
let TicketPriority = 2;

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
        subDepartments.forEach(subDepartment => {
          SubDepartmentList.insertAdjacentHTML('beforeend' , `
          <option value="${subDepartment._id}">${subDepartment.title}</option>
          `)
        })
      })
    })
    SubDepartmentList.addEventListener('change' , event =>  SubDepartmentID = event.target.value)
    TicketPriorityList.addEventListener('change' , event => TicketPriority = event.target.value)
  }



const ShowAllTickets = async () => {
  const ShowAllTicketsBody = $.querySelector('#ShowAllTicketsBody');
 const CountOfAllTickets = $.querySelector('#CountOfAllTickets');

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
      ShowAllTicketsBody.insertAdjacentHTML('beforeend' , `
      <div class="flex-between p-3">
      <div  class="flex flex-col gap-4">
              <p>عضو شده در گروه تلگرامی</p>
              <p>محمد امین سعیدی راد</p>
              <p class="bg-white px-4 py-3 rounded-lg">پشتیبانی دوره ها</p>
      </div>
      <div class="flex-center gap-3">
          <p class="flex-center gap-2 bg-white border border-gray-100 px-3 py-1 rounded-lg rounded-tl-none">
            <span class="bg-emerald-500 w-2 h-2 rounded-full"></span>
            پاسخ داده شده</p>
            <div>
              <p>1340/12/02</p>
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
};
