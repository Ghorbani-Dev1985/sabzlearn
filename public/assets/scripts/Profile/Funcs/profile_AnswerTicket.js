import {
  GetToken,
  ShowSwalAlert,
  BaseUrl,
  GetUrlParam
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


const ShowAllAnswerTickets = async () => {
  const ShowAllTicketsBody = $.querySelector('#AnswerTicketsBody');
  const TicketID = GetUrlParam('id');
  const res =  await fetch(`${BaseUrl()}tickets/answer/${TicketID}`, {
   method: "GET",
   headers: {
     Authorization: `Bearer ${GetToken()}`,
   },
  })
  const TicketAnswer = await res.json();
   console.log(TicketAnswer);
      ShowAllTicketsBody.insertAdjacentHTML('beforeend' , `
      <div class="chat chat-start mb-5">
      <div class="chat-bubble bg-gray-100 text-zinc-700 font-DanaMd text-base">${TicketAnswer.ticket}</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble bg-emerald-200 text-emerald-600 font-DanaMd text-base">${
        TicketAnswer.answer ? `${TicketAnswer.answer}` : 'بدون پاسخ'}</div>
    </div>
      `)
}

export {
  ShowAllAnswerTickets,
  PrepareSendTicketForm,
  SendNewTicket,
};
