import { GetToken, ShowSwalAlert , BaseUrl} from "../../Funcs/Utils.js";
const $ = document;
let CategoryID = -1;
let CourseStatus = "start";
let CourseCover = null;

const GetAllCourses = async () => {
  const CountOfAllCourses = $.querySelector("#CountOfAllCourses");
  const AllCoursesTable = $.querySelector("#AllCoursesTable tbody");
  AllCoursesTable.innerHTML = "";
  const res = await fetch(`${BaseUrl()}courses`);
  const courses = await res.json();
  CountOfAllCourses.innerHTML = courses.length;
  courses.forEach((course, index) => {
    AllCoursesTable.insertAdjacentHTML(
      "beforeend",
      `
       <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 child:text-center even:dark:bg-gray-800 border-b dark:border-gray-700">
       <td class="px-6 py-4">
      ${index + 1}
       </td>
       <td class="px-6 py-4" class="whitespace-break-spaces font-DanaMd leading-5">
        ${course.name}
       </td>
       <td class="px-6 py-4">
        ${course.price === 0 ? "رایگان" : course.price.toLocaleString()}
       </td>
       <td class="px-6 py-4">
        ${course.registers}
       </td>
       <td class="px-6 py-4">
       ${course.support}
       </td>
       <td class="px-6 py-4">
       ${course.categoryID}
       </td>
       <td class="px-6 py-4">
       <div class="flex-center">
        ${Array(course.courseAverageScore)
          .fill(0)
          .map(
            (score) => `
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-3 h-3">
           <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
         </svg>
         ` 
          )
          .join("")}
      </div>
       </td>
       <td class="px-6 py-4">
       ${course.isComplete ? "تکمیل شده" : " در حال برگزاری"}
       </td>
        <td class="px-6 py-4">
        <div class="text-sky-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
        </div>
        </td>
        <td class="px-6 py-4">
        <div onClick="DeleteCourse('${course._id}')" class="text-rose-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
        </div>
        </td>
     </tr>
       `
    );
  });

  return courses;
};

const PrepareCreateCourseFrom = async () => {
  const CourseCategoryList = $.querySelector("#CourseCategoryList");
  const PresSellCourseRadio = $.querySelector("#PresSellCourseRadio");
  const StartCourseRadio = $.querySelector("#StartCourseRadio");
  const CourseCoverUploader = $.querySelector("#CourseCoverUploader");
  const ShowFileNameUpload = $.querySelector("#ShowFileNameUpload");
  const res = await fetch(`${BaseUrl()}category`);
  const categories = await res.json();
  categories.forEach((category) => {
    CourseCategoryList.insertAdjacentHTML(
      "beforeend",
      `
       <option value=${category._id}>${category.title}</option>
      `
    );
  });
  CourseCategoryList.addEventListener(
    "change",
    (event) => (CategoryID = event.target.value)
  );
  PresSellCourseRadio.addEventListener(
    "change",
    (event) => (CourseStatus = event.target.value)
  );
  StartCourseRadio.addEventListener(
    "change",
    (event) => (CourseStatus = event.target.value)
  );
  CourseCoverUploader.addEventListener("change", (event) => {
    ShowFileNameUpload.innerHTML = event.target.files[0].name;
    CourseCover = event.target.files[0];
  });
};

const CreateNewCourse = async () => {
  const CourseNameInput = $.querySelector("#CourseNameInput");
  const CoursePriceInput = $.querySelector("#CoursePriceInput");
  const CourseDescription = $.querySelector("#CourseDescription");
  const CourseShortNameInput = $.querySelector("#CourseShortNameInput");
  const CourseSupportInput = $.querySelector("#CourseSupportInput");
  const formData = new FormData();
  formData.append("name", CourseNameInput.value.trim());
  formData.append("price", CoursePriceInput.value.trim());
  formData.append("description", CourseDescription.value.trim());
  formData.append("shortName", CourseShortNameInput.value.trim());
  formData.append("support", CourseSupportInput.value.trim());
  formData.append("categoryID", CategoryID);
  formData.append("status", CourseStatus);
  formData.append("cover", CourseCover);
 if(CourseNameInput.value !== '' && CoursePriceInput.value !== '' && CourseDescription.value !== '' && CourseShortNameInput.value !== '' && CourseSupportInput.value !== '' && CategoryID !== -1 && CourseCover !== null){
   const res = await fetch(`${BaseUrl()}courses`, {
     method: "POST",
     headers: {
       Authorization: `Bearer ${GetToken()}`,
     },
     body: formData,
   });


 }else{
  Swal.fire({
    position: "top-center",
    icon: "error",
    title: "لطفا فرم را تکمیل نمایید ",
    showConfirmButton: false,
    timer: 1500,
  });
 }
};

const DeleteCourse = async (courseID) => {
 Swal.fire({
      title: "آیا برای حذف دوره مطمعن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f43f5e",
      cancelButtonColor: "#3f3f46",
      confirmButtonText: "حذف",
      cancelButtonText: "انصراف"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`${BaseUrl()}courses${courseID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${GetToken()}`,
          },
        });
        if(res.ok){
          GetAllCourses();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "دوره مورد نظر با موفقیت حذف گردید",
            showConfirmButton: false,
            timer: 1500
          });
        }else{
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "خطایی در روند حذف دوره ایجاد گردید",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    });
}

export { GetAllCourses, CreateNewCourse, PrepareCreateCourseFrom ,DeleteCourse};
