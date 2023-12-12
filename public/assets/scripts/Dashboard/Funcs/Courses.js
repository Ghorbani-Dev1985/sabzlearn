
const $ = document;

const GetAllCourses = async () => {
   const CountOfAllCourses = $.querySelector('#CountOfAllCourses');
    const AllCoursesTable = $.querySelector('#AllCoursesTable tbody');
   const res = await fetch('http://localhost:4000/v1/courses');
   const courses = await res.json();
   CountOfAllCourses.innerHTML = courses.length;
   courses.forEach((course , index) => {
       AllCoursesTable.insertAdjacentHTML('beforeend' , `
       <tr class="even:bg-gray-50 odd:bg-white child:py-0">
       <th>
      ${index + 1}
       </th>
       <td class="whitespace-break-spaces font-DanaMd leading-5">
        ${course.name}
       </td>
       <td>
        ${course.price === 0 ? 'رایگان': course.price.toLocaleString()}
       </td>
       <td>
        ${course.registers}
       </td>
       <td>
       ${course.support}
       </td>
       <td>
       ${course.categoryID}
       </td>
       <td>
       <div class="flex-center">
        ${
         Array(course.courseAverageScore)
         .fill(0)
         .map(
           (score) => `
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" class="w-4 h-4">
           <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
         </svg>
         `
         ).join('')
      }
      </div>
       </td>
       <td>
       ${
         course.isComplete ? 'تکمیل شده': ' در حال ضبظ'
       }
       </td>
        <td>
        <div class="text-sky-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
        </div>
        </td>
        <td>
        <div class="text-rose-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
        </div>
        </td>
     </tr>
       `)
   });

   return courses;

}



export {GetAllCourses}
